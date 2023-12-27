## Mongo DB Task Details

### Design database for Zen class programme

### Collections

- users
- codekata
- attendance
- topics
- tasks
- company_drives
- mentors

1.  Find all the topics and tasks which are thought in the month of October
    Query

```javascript
db.topics.aggregate([
  {
    $match: {
      $expr: { $eq: [{ $month: "$topic_Date" }, 10] },
    },
  },
  {
    $lookup: {
      from: "tasks",
      localField: "topic_Tasks",
      foreignField: "_id",
      as: "topic_Tasks",
    },
  },
]);
```

2.  Find all the company drives which appeared between 15 oct-2020 and 31-oct-2020

Query

```javascript
db.company_drives.find({
  company_drivesDate: {
    $gt: ISODate("2020-10-15"),
    $lt: ISODate("2020-10-31"),
  },
});
```

3.  Find all the company drives and students who are appeared for the placement.
    Query

```javascript
db.company_drives.aggregate([
  {
    $lookup: {
      from: "users",
      localField: "appeared_Students",
      foreignField: "_id",
      as: "appeared_Students",
    },
  },
  {
    $project: {
      company_drivesId: 1,
      company_Name: 1,
      company_Description: 1,
      company_drivesDate: 1,
      appeared_Students: {
        user_Name: 1,
        user_Email: 1,
        user_Phone: 1,
        user_Batch: 1,
      },
    },
  },
]);
```

4.  Find the number of problems solved by the user in codekata
    Query

```javascript
db.users.aggregate([
  {
    $project: {
      user_Name: 1,
      user_Email: 1,
      user_Phone: 1,
      user_Batch: 1,
      number_Of_Problems: { $size: "$user_SolvedCodekatta" },
      user_SolvedCodekatta: 1,
    },
  },
]);
```

5.  Find all the mentors with who has the mentee's count more than 15
    Query

```javascript
db.mentors.aggregate([
  {
    $addFields: {
      totalStudents: { $size: "$mentor_Students" },
    },
  },
  {
    $project: {
      totalStudents: 1,
      mentor_Name: 1,
    },
  },
  {
    $match: {
      totalStudents: { $gt: 15 },
    },
  },
]);
```

6.  Find the number of users who are absent and task is not submitted between 15 oct-2020 and 31-oct-2020
