# College Scorecard Challenge

The Department of Education collects college data and releases [College Scorecards](https://catalog.data.gov/dataset/college-scorecard) in order to help students find a college that is a good fit.

Use the `2013_college_scorecards.csv` file (which is a modified version of the original CSV file) to write a program that calculates and outputs specific data. You may find it helpful to open this file in Excel or Numbers in order to see the data in a tabular format before manipulating it programmatically. 

**TDD is not required for this challenge**

### 1: Filter By State

For this challenge, you'll use the `STABBR` header. 

```
$ ruby college_scorecard.rb by_state AK
```

Should return a list of all colleges in a specific state:

```
University of Alaska Anchorage
Alaska Bible College
University of Alaska Fairbanks
University of Alaska Southeast
Alaska Pacific University
AVTEC-Alaska's Institute of Technology
Charter College-Anchorage
Prince William Sound Community College
Alaska Career College
Ilisagvik College
Alaska Christian College
```

### 2: Filter By Top Average Faculty Salary

For this challenge, you'll use the `AVGFACSAL` header. 

```
$ ruby college_scorecard.rb top_average_faculty_salary 10
```

Should return the top 10 schools by average faculty salary. (The argument `10` is dynamic. If I were to enter 20, I should receive the top 20 schools.)

```
The University of Texas MD Anderson Cancer Center
Stanford University
New York Law School
Harvard University
University of Chicago
California Institute of Technology
Yale University
Princeton University
Columbia University in the City of New York
Massachusetts Institute of Technology
```

### 3: Filter By Median Debt Floor and Ceiling

For this challenge, you'll use the `GRAD_DEBT_MDN` header. 

```
$ ruby college_scorecard.rb median_debt_between 1500 2300
```

Should return a list of colleges whose median debt is between (exclusive) the two given numbers. Next to each college should be the corresponding median debt:

```
Ponce Paramedical College Inc ($2260)
Alliant International University ($2000)
Alliant International University-Fresno ($2000)
Alliant International University-Los Angeles ($2000)
Alliant International University-San Francisco ($2000)
Alliant International University-Irvine ($2000)
Alliant International University-Sacramento ($2000)
Philadelphia College of Osteopathic Medicine ($2000)
West Virginia School of Osteopathic Medicine ($2000)
Coachella Valley Beauty College ($1914)
Automeca Technical College-Aguadilla ($1750)
Automeca Technical College-Bayamon ($1750)
Automeca Technical College-Caguas ($1750)
Automeca Technical College-Ponce ($1750)
```

### 4: Rewrite in a second language

Choose a second language (Python, R, etc.) and implement *at least one* of the above pieces of functionality. 

Getting started with R:

* [Install R](https://cran.r-project.org/)
* Download [RStudio](https://www.rstudio.com/products/rstudio/download/)
* Open RStudio. In the menu "Session", hover over "Set Working Directory" and click "Choose Directory". Find where you've saved the `2013_college_scorecards.csv` file, and choose that directory.
* To read a csv, use `read.csv('2013_college_scorecards.csv')`. 
* Do some Googling/StackOverflowing, and you're on your way :) 
