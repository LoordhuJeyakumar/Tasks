
CREATE TABLE `Movies` (
    `movie_ID` int  NOT NULL ,
    `movie_title` varchar(50)  NOT NULL ,
    `movie_description` varchar(200)  NOT NULL ,
    `genreID` int  NOT NULL ,
    `movie_year` int  NOT NULL ,
    `movie_revenue` float  NOT NULL ,
    `directorID` int  NOT NULL ,
    `writersID` int  NOT NULL ,
    `artistID` int  NOT NULL ,
    `mediaID` int  NOT NULL ,
    `reviewID` int  NOT NULL ,
    PRIMARY KEY (
        `movie_ID`
    )
);

CREATE TABLE `media` (
    `media_ID` int  NOT NULL ,
    `video` text  NULL ,
    `image` text  NULL ,
    PRIMARY KEY (
        `media_ID`
    )
);

CREATE TABLE `genre` (
    `genre_ID` int  NOT NULL ,
    `genre_Name` varchar(20)  NOT NULL ,
    `genre_Description` varchar(100)  NOT NULL ,
    PRIMARY KEY (
        `genre_ID`
    )
);

CREATE TABLE `review` (
    `review_ID` int  NOT NULL ,
    `review_Title` varchar(20)  NOT NULL ,
    `review_Details` varchar(100)  NOT NULL ,
    `review_Score` int  NOT NULL ,
    `review_Date` date  NOT NULL ,
    `movieID` int  NOT NULL ,
    `userID` int  NOT NULL ,
    PRIMARY KEY (
        `review_ID`
    )
);

CREATE TABLE `user` (
    `user_ID` int  NOT NULL ,
    `user_Name` varchar(50)  NOT NULL ,
    `user_Email` varchar(100)  NOT NULL ,
    `reviewID` int  NOT NULL ,
    PRIMARY KEY (
        `user_ID`
    )
);

CREATE TABLE `artist` (
    `artist_ID` int  NOT NULL ,
    `artist_Name` varchar(50)  NOT NULL ,
    `artistSkilsID` int  NOT NULL ,
    `artistRole` int  NOT NULL ,
    PRIMARY KEY (
        `artist_ID`
    )
);

CREATE TABLE `skills` (
    `skill_ID` int  NOT NULL ,
    `skills_Name` varchar(50)  NOT NULL ,
    PRIMARY KEY (
        `skill_ID`
    )
);

CREATE TABLE `role` (
    `role_ID` int  NOT NULL ,
    `role_Name` varchar(20)  NOT NULL ,
    `role_Description` varchar(50)  NOT NULL ,
    PRIMARY KEY (
        `role_ID`
    )
);

CREATE TABLE `director` (
    `director_ID` int  NOT NULL ,
    `director_Name` varchar(20)  NOT NULL ,
    PRIMARY KEY (
        `director_ID`
    )
);

CREATE TABLE `writer` (
    `writer_ID` int  NOT NULL ,
    `writer_Name` varchar(20)  NOT NULL ,
    PRIMARY KEY (
        `writer_ID`
    )
);

ALTER TABLE `Movies` ADD CONSTRAINT `fk_Movies_genreID` FOREIGN KEY(`genreID`)
REFERENCES `genre` (`genre_ID`);

ALTER TABLE `Movies` ADD CONSTRAINT `fk_Movies_directorID` FOREIGN KEY(`directorID`)
REFERENCES `director` (`director_ID`);

ALTER TABLE `Movies` ADD CONSTRAINT `fk_Movies_writersID` FOREIGN KEY(`writersID`)
REFERENCES `writer` (`writer_ID`);

ALTER TABLE `Movies` ADD CONSTRAINT `fk_Movies_artistID` FOREIGN KEY(`artistID`)
REFERENCES `artist` (`artist_ID`);

ALTER TABLE `Movies` ADD CONSTRAINT `fk_Movies_mediaID` FOREIGN KEY(`mediaID`)
REFERENCES `media` (`media_ID`);

ALTER TABLE `Movies` ADD CONSTRAINT `fk_Movies_reviewID` FOREIGN KEY(`reviewID`)
REFERENCES `review` (`review_ID`);

ALTER TABLE `user` ADD CONSTRAINT `fk_user_reviewID` FOREIGN KEY(`reviewID`)
REFERENCES `review` (`review_ID`);

ALTER TABLE `artist` ADD CONSTRAINT `fk_artist_artistSkilsID` FOREIGN KEY(`artistSkilsID`)
REFERENCES `skills` (`skill_ID`);

ALTER TABLE `artist` ADD CONSTRAINT `fk_artist_artistRole` FOREIGN KEY(`artistRole`)
REFERENCES `role` (`role_ID`);

