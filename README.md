# Frontend Assessment

Welcome, you've arrived to the Vulcan Search Frontend Assessment. 
This means you passed the iron gates of our phone screening and are now staring at your second mission.
This assessment is designed for you to showcase your ability to create a configurable table with React. 
We will provide you with a guide, but creativity and imagination are yours to share. 
Pay attention to notes left behind. 
Peace be with you 🖖 

# Configurable Table

Write a react table component that has these states:

1. ColumnHeaders
2. Rows
3. SortedBy
4. Order
5. Query 

### _Example state values:_
```javascript
columnHeaders = ['meat', 'protein (g)', 'calories (cal)', 'carbohydrates (g)', 'fat (g)']
rows = [
  ['chicken breast', '25g', '200cal', '37g', '8g'],
  ['fried chicken', '45g', '450cal', '21g', '16g'],
  [...]
]
sortedBy = 'meat'
order = 'asc'
query = 'chicken'
```
### _Specification:_

1. The data in this table should be configurable by text input.    

    **columnHeaders** will take in a 1-dimensional array for example: 
    ```javascript
    ['meat', 'protein (g)', 'calories (cal)', 'carbohydrates (g)', 'fat (g)']
    ```
    **cows** will take in a 2-dimensional array for example: 
    ```javascript
    [
      ['chicken breast', '25g', '200cal', '37g', '8g'],
      ['fried chicken', '45g', '450cal', '21g', '16g'],
      ['beef stew', '20g', '250cal', '8g', '14g']
    ]
    ```
2. Allow user to apply column filters.  Hence, giving the user the ability to hide or display the columns of their choice.  How you design this feature is up to you.
3. Clicking on one of the **columnHeaders** should set the **sortedBy** value to the value of the header and **order** to asc. Clicking on it again should set the **order** to desc.
4. Table rows should be sorted depending on the value of **sortedBy** and **order**.
5. **query** should filter the rows by only displaying the rows which contain text that matches the **query** input.  If **query** is set and doesn't match any of the values in each of the rows, show 'No records matched the specified query'.
6. The way you design and implement each of these features is up to you.  We want to see how you create user-friendly, intuitive UX. 

# What we’re looking for

1. Code organization.
2. Code cleanliness.
3. Code performance and efficiency.
4. Knowledge on asynchronous javascript.
5. Knowledge on making ajax calls.
6. Knowledge on different types of react components.
7. Proficiency on designing state shape (Data Structures)
8. Correct use of contexts and binds.
9. Use of inline styles -- should be kept to a minimum.



<img width="1028" alt="Screen Shot 2019-03-14 at 8 26 34 PM" src="https://user-images.githubusercontent.com/28902787/54406468-8365be80-4697-11e9-9efe-dd17e01a023e.png">
