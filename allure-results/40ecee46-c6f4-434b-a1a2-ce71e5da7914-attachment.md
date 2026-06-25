# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: demosite.test.ts >> demoqa forms test
- Location: tests\demosite.test.ts:2:1

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.selectOption: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('react-datepicker__year-select')

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - banner [ref=e3]:
    - link [ref=e4] [cursor=pointer]:
      - /url: https://demoqa.com
      - img [ref=e5]
  - generic [ref=e8]:
    - generic [ref=e11]:
      - generic [ref=e14] [cursor=pointer]:
        - generic [ref=e15]:
          - img [ref=e17]
          - text: Elements
        - img [ref=e22]
      - generic [ref=e24]:
        - generic [ref=e26] [cursor=pointer]:
          - generic [ref=e27]:
            - img [ref=e29]
            - text: Forms
          - img [ref=e35]
        - list [ref=e38]:
          - listitem [ref=e39] [cursor=pointer]:
            - link "Practice Form" [ref=e40]:
              - /url: /automation-practice-form
              - img [ref=e41]
              - text: Practice Form
      - generic [ref=e45] [cursor=pointer]:
        - generic [ref=e46]:
          - img [ref=e48]
          - text: Alerts, Frame & Windows
        - img [ref=e53]
      - generic [ref=e57] [cursor=pointer]:
        - generic [ref=e58]:
          - img [ref=e60]
          - text: Widgets
        - img [ref=e66]
      - generic [ref=e70] [cursor=pointer]:
        - generic [ref=e71]:
          - img [ref=e73]
          - text: Interactions
        - img [ref=e78]
      - generic [ref=e82] [cursor=pointer]:
        - generic [ref=e83]:
          - img [ref=e85]
          - text: Book Store Application
        - img [ref=e90]
    - generic [ref=e93]:
      - heading "Practice Form" [level=1] [ref=e94]
      - heading "Student Registration Form" [level=5] [ref=e95]
      - generic [ref=e96]:
        - generic [ref=e97]:
          - generic [ref=e99]: Name
          - textbox "First Name" [ref=e101]: Rishwanth
          - textbox "Last Name" [ref=e103]
        - generic [ref=e104]:
          - generic [ref=e106]: Email
          - textbox "name@example.com" [ref=e108]: funbun@gmail.com
        - generic [ref=e109]:
          - generic [ref=e110]: Gender
          - generic [ref=e111]:
            - generic [ref=e112]:
              - radio "Male" [checked] [ref=e113]
              - generic [ref=e114]: Male
            - generic [ref=e115]:
              - radio "Female" [ref=e116]
              - generic [ref=e117]: Female
            - generic [ref=e118]:
              - radio "Other" [ref=e119]
              - generic [ref=e120]: Other
        - generic [ref=e121]:
          - generic [ref=e123]: Mobile(10 Digits)
          - textbox "Mobile Number" [ref=e125]: "8610146300"
        - generic [ref=e126]:
          - generic [ref=e128]: Date of Birth
          - generic [ref=e129]:
            - textbox [active] [ref=e132]: 25 Jun 2026
            - generic [ref=e133]:
              - dialog "Choose Date" [ref=e136]:
                - alert [ref=e137]: February 2026
                - button "Previous Month" [ref=e138] [cursor=pointer]:
                  - generic: Previous Month
                - button "Next Month" [ref=e139] [cursor=pointer]:
                  - generic: Next Month
                - generic [ref=e140]:
                  - generic [ref=e141]:
                    - heading "February 2026" [level=2] [ref=e142]
                    - generic [ref=e143]:
                      - combobox [ref=e145]:
                        - option "January"
                        - option "February" [selected]
                        - option "March"
                        - option "April"
                        - option "May"
                        - option "June"
                        - option "July"
                        - option "August"
                        - option "September"
                        - option "October"
                        - option "November"
                        - option "December"
                      - combobox [ref=e147]:
                        - option "1900"
                        - option "1901"
                        - option "1902"
                        - option "1903"
                        - option "1904"
                        - option "1905"
                        - option "1906"
                        - option "1907"
                        - option "1908"
                        - option "1909"
                        - option "1910"
                        - option "1911"
                        - option "1912"
                        - option "1913"
                        - option "1914"
                        - option "1915"
                        - option "1916"
                        - option "1917"
                        - option "1918"
                        - option "1919"
                        - option "1920"
                        - option "1921"
                        - option "1922"
                        - option "1923"
                        - option "1924"
                        - option "1925"
                        - option "1926"
                        - option "1927"
                        - option "1928"
                        - option "1929"
                        - option "1930"
                        - option "1931"
                        - option "1932"
                        - option "1933"
                        - option "1934"
                        - option "1935"
                        - option "1936"
                        - option "1937"
                        - option "1938"
                        - option "1939"
                        - option "1940"
                        - option "1941"
                        - option "1942"
                        - option "1943"
                        - option "1944"
                        - option "1945"
                        - option "1946"
                        - option "1947"
                        - option "1948"
                        - option "1949"
                        - option "1950"
                        - option "1951"
                        - option "1952"
                        - option "1953"
                        - option "1954"
                        - option "1955"
                        - option "1956"
                        - option "1957"
                        - option "1958"
                        - option "1959"
                        - option "1960"
                        - option "1961"
                        - option "1962"
                        - option "1963"
                        - option "1964"
                        - option "1965"
                        - option "1966"
                        - option "1967"
                        - option "1968"
                        - option "1969"
                        - option "1970"
                        - option "1971"
                        - option "1972"
                        - option "1973"
                        - option "1974"
                        - option "1975"
                        - option "1976"
                        - option "1977"
                        - option "1978"
                        - option "1979"
                        - option "1980"
                        - option "1981"
                        - option "1982"
                        - option "1983"
                        - option "1984"
                        - option "1985"
                        - option "1986"
                        - option "1987"
                        - option "1988"
                        - option "1989"
                        - option "1990"
                        - option "1991"
                        - option "1992"
                        - option "1993"
                        - option "1994"
                        - option "1995"
                        - option "1996"
                        - option "1997"
                        - option "1998"
                        - option "1999"
                        - option "2000"
                        - option "2001"
                        - option "2002"
                        - option "2003"
                        - option "2004"
                        - option "2005"
                        - option "2006"
                        - option "2007"
                        - option "2008"
                        - option "2009"
                        - option "2010"
                        - option "2011"
                        - option "2012"
                        - option "2013"
                        - option "2014"
                        - option "2015"
                        - option "2016"
                        - option "2017"
                        - option "2018"
                        - option "2019"
                        - option "2020"
                        - option "2021"
                        - option "2022"
                        - option "2023"
                        - option "2024"
                        - option "2025"
                        - option "2026" [selected]
                        - option "2027"
                        - option "2028"
                        - option "2029"
                        - option "2030"
                        - option "2031"
                        - option "2032"
                        - option "2033"
                        - option "2034"
                        - option "2035"
                        - option "2036"
                        - option "2037"
                        - option "2038"
                        - option "2039"
                        - option "2040"
                        - option "2041"
                        - option "2042"
                        - option "2043"
                        - option "2044"
                        - option "2045"
                        - option "2046"
                        - option "2047"
                        - option "2048"
                        - option "2049"
                        - option "2050"
                        - option "2051"
                        - option "2052"
                        - option "2053"
                        - option "2054"
                        - option "2055"
                        - option "2056"
                        - option "2057"
                        - option "2058"
                        - option "2059"
                        - option "2060"
                        - option "2061"
                        - option "2062"
                        - option "2063"
                        - option "2064"
                        - option "2065"
                        - option "2066"
                        - option "2067"
                        - option "2068"
                        - option "2069"
                        - option "2070"
                        - option "2071"
                        - option "2072"
                        - option "2073"
                        - option "2074"
                        - option "2075"
                        - option "2076"
                        - option "2077"
                        - option "2078"
                        - option "2079"
                        - option "2080"
                        - option "2081"
                        - option "2082"
                        - option "2083"
                        - option "2084"
                        - option "2085"
                        - option "2086"
                        - option "2087"
                        - option "2088"
                        - option "2089"
                        - option "2090"
                        - option "2091"
                        - option "2092"
                        - option "2093"
                        - option "2094"
                        - option "2095"
                        - option "2096"
                        - option "2097"
                        - option "2098"
                        - option "2099"
                        - option "2100"
                  - table [ref=e148]:
                    - rowgroup [ref=e149]:
                      - row "Sunday Monday Tuesday Wednesday Thursday Friday Saturday" [ref=e150]:
                        - columnheader "Sunday" [ref=e151]:
                          - generic [ref=e152]: Sunday
                          - text: Su
                        - columnheader "Monday" [ref=e153]:
                          - generic [ref=e154]: Monday
                          - text: Mo
                        - columnheader "Tuesday" [ref=e155]:
                          - generic [ref=e156]: Tuesday
                          - text: Tu
                        - columnheader "Wednesday" [ref=e157]:
                          - generic [ref=e158]: Wednesday
                          - text: We
                        - columnheader "Thursday" [ref=e159]:
                          - generic [ref=e160]: Thursday
                          - text: Th
                        - columnheader "Friday" [ref=e161]:
                          - generic [ref=e162]: Friday
                          - text: Fr
                        - columnheader "Saturday" [ref=e163]:
                          - generic [ref=e164]: Saturday
                          - text: Sa
                    - rowgroup "Month February, 2026" [ref=e165]:
                      - row "Choose Sunday, February 1st, 2026 Choose Monday, February 2nd, 2026 Choose Tuesday, February 3rd, 2026 Choose Wednesday, February 4th, 2026 Choose Thursday, February 5th, 2026 Choose Friday, February 6th, 2026 Choose Saturday, February 7th, 2026" [ref=e166]:
                        - gridcell "Choose Sunday, February 1st, 2026" [ref=e167] [cursor=pointer]: "1"
                        - gridcell "Choose Monday, February 2nd, 2026" [ref=e168] [cursor=pointer]: "2"
                        - gridcell "Choose Tuesday, February 3rd, 2026" [ref=e169] [cursor=pointer]: "3"
                        - gridcell "Choose Wednesday, February 4th, 2026" [ref=e170] [cursor=pointer]: "4"
                        - gridcell "Choose Thursday, February 5th, 2026" [ref=e171] [cursor=pointer]: "5"
                        - gridcell "Choose Friday, February 6th, 2026" [ref=e172] [cursor=pointer]: "6"
                        - gridcell "Choose Saturday, February 7th, 2026" [ref=e173] [cursor=pointer]: "7"
                      - row "Choose Sunday, February 8th, 2026 Choose Monday, February 9th, 2026 Choose Tuesday, February 10th, 2026 Choose Wednesday, February 11th, 2026 Choose Thursday, February 12th, 2026 Choose Friday, February 13th, 2026 Choose Saturday, February 14th, 2026" [ref=e174]:
                        - gridcell "Choose Sunday, February 8th, 2026" [ref=e175] [cursor=pointer]: "8"
                        - gridcell "Choose Monday, February 9th, 2026" [ref=e176] [cursor=pointer]: "9"
                        - gridcell "Choose Tuesday, February 10th, 2026" [ref=e177] [cursor=pointer]: "10"
                        - gridcell "Choose Wednesday, February 11th, 2026" [ref=e178] [cursor=pointer]: "11"
                        - gridcell "Choose Thursday, February 12th, 2026" [ref=e179] [cursor=pointer]: "12"
                        - gridcell "Choose Friday, February 13th, 2026" [ref=e180] [cursor=pointer]: "13"
                        - gridcell "Choose Saturday, February 14th, 2026" [ref=e181] [cursor=pointer]: "14"
                      - row "Choose Sunday, February 15th, 2026 Choose Monday, February 16th, 2026 Choose Tuesday, February 17th, 2026 Choose Wednesday, February 18th, 2026 Choose Thursday, February 19th, 2026 Choose Friday, February 20th, 2026 Choose Saturday, February 21st, 2026" [ref=e182]:
                        - gridcell "Choose Sunday, February 15th, 2026" [ref=e183] [cursor=pointer]: "15"
                        - gridcell "Choose Monday, February 16th, 2026" [ref=e184] [cursor=pointer]: "16"
                        - gridcell "Choose Tuesday, February 17th, 2026" [ref=e185] [cursor=pointer]: "17"
                        - gridcell "Choose Wednesday, February 18th, 2026" [ref=e186] [cursor=pointer]: "18"
                        - gridcell "Choose Thursday, February 19th, 2026" [ref=e187] [cursor=pointer]: "19"
                        - gridcell "Choose Friday, February 20th, 2026" [ref=e188] [cursor=pointer]: "20"
                        - gridcell "Choose Saturday, February 21st, 2026" [ref=e189] [cursor=pointer]: "21"
                      - row "Choose Sunday, February 22nd, 2026 Choose Monday, February 23rd, 2026 Choose Tuesday, February 24th, 2026 Choose Wednesday, February 25th, 2026 Choose Thursday, February 26th, 2026 Choose Friday, February 27th, 2026 Choose Saturday, February 28th, 2026" [ref=e190]:
                        - gridcell "Choose Sunday, February 22nd, 2026" [ref=e191] [cursor=pointer]: "22"
                        - gridcell "Choose Monday, February 23rd, 2026" [ref=e192] [cursor=pointer]: "23"
                        - gridcell "Choose Tuesday, February 24th, 2026" [ref=e193] [cursor=pointer]: "24"
                        - gridcell "Choose Wednesday, February 25th, 2026" [ref=e194] [cursor=pointer]: "25"
                        - gridcell "Choose Thursday, February 26th, 2026" [ref=e195] [cursor=pointer]: "26"
                        - gridcell "Choose Friday, February 27th, 2026" [ref=e196] [cursor=pointer]: "27"
                        - gridcell "Choose Saturday, February 28th, 2026" [ref=e197] [cursor=pointer]: "28"
                      - row "Choose Sunday, March 1st, 2026 Choose Monday, March 2nd, 2026 Choose Tuesday, March 3rd, 2026 Choose Wednesday, March 4th, 2026 Choose Thursday, March 5th, 2026 Choose Friday, March 6th, 2026 Choose Saturday, March 7th, 2026" [ref=e198]:
                        - gridcell "Choose Sunday, March 1st, 2026" [ref=e199] [cursor=pointer]: "1"
                        - gridcell "Choose Monday, March 2nd, 2026" [ref=e200] [cursor=pointer]: "2"
                        - gridcell "Choose Tuesday, March 3rd, 2026" [ref=e201] [cursor=pointer]: "3"
                        - gridcell "Choose Wednesday, March 4th, 2026" [ref=e202] [cursor=pointer]: "4"
                        - gridcell "Choose Thursday, March 5th, 2026" [ref=e203] [cursor=pointer]: "5"
                        - gridcell "Choose Friday, March 6th, 2026" [ref=e204] [cursor=pointer]: "6"
                        - gridcell "Choose Saturday, March 7th, 2026" [ref=e205] [cursor=pointer]: "7"
              - img
        - generic [ref=e206]:
          - generic [ref=e208]: Subjects
          - generic [ref=e210]:
            - log [ref=e212]
            - combobox [ref=e216]
        - generic [ref=e219]:
          - generic [ref=e221]: Hobbies
          - generic [ref=e222]:
            - generic [ref=e223]:
              - checkbox "Sports" [ref=e224]
              - generic [ref=e225]: Sports
            - generic [ref=e226]:
              - checkbox "Reading" [ref=e227]
              - generic [ref=e228]: Reading
            - generic [ref=e229]:
              - checkbox "Music" [ref=e230]
              - generic [ref=e231]: Music
        - generic [ref=e232]:
          - generic [ref=e234]: Picture
          - button "Choose File" [ref=e236] [cursor=pointer]
        - generic [ref=e237]:
          - generic [ref=e239]: Current Address
          - textbox "Current Address" [ref=e241]
        - generic [ref=e242]:
          - generic [ref=e244]: State and City
          - generic [ref=e246]:
            - log [ref=e248]
            - generic [ref=e249]:
              - generic [ref=e250]:
                - generic [ref=e251]: Select State
                - combobox [ref=e253]
              - img [ref=e257]
          - generic [ref=e259]:
            - generic:
              - log
              - generic:
                - generic:
                  - generic: Select City
                - generic:
                  - generic:
                    - img
        - button "Submit" [ref=e262] [cursor=pointer]
  - contentinfo [ref=e269]:
    - generic [ref=e270]: © 2013-2026 TOOLSQA.COM | ALL RIGHTS RESERVED.
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | test('demoqa forms test', async ({ page }) => {
  3  |     await page.goto("https://demoqa.com/automation-practice-form");
  4  |     const title = await page.title();
  5  |     await expect(title).toEqual("demosite");
  6  |     await page.getByPlaceholder("First Name").fill('');
  7  |     await page.getByPlaceholder("First Name").fill('Rishwanth');
  8  |     await page.locator('//input[@type="text"]').nth(2).fill("Adhishwar");
  9  |     await page.getByPlaceholder("name@example.com").fill("funbun@gmail.com");
  10 |     await page.locator('#gender-radio-1').click();
  11 |     await page.getByPlaceholder("Mobile Number").fill("8610146300");
  12 |     await page.locator('//input[@id="dateOfBirthInput"]').click();
  13 |     await page.locator('.react-datepicker__month-select').selectOption("1");
> 14 |     await page.locator('react-datepicker__year-select').selectOption("2005");
     |                                                         ^ Error: locator.selectOption: Test timeout of 30000ms exceeded.
  15 |     await page.getByLabel('28').click();
  16 |     await page.locator('.subjects-auto-complete__input').fill("I am Rishwanth Adhishwar Working with this Website");
  17 |     await page.locator('#hobbies-checkbox-1').click();
  18 |     await page.locator('.uploadPicture').setInputFiles("D:\PlayWright\ChatGPT Image Jun 25, 2026, 10_30_16 AM.png");
  19 |     await page.getByPlaceholder("Current Address").fill("R.S Puram Coimbatore");
  20 |     await page.getByRole('button', { name: 'submit' }).click();
  21 |     const exppected = await page.locator('.modal-title').textContent();
  22 |     await expect.soft(exppected).toContain("Thanks for submitting the form");
  23 | 
  24 | });
```