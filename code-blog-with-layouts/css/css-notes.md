# CSS notes

    1. font-size : size of the font
    2. font-family : family of the font
    3. text-transform : turn text upper case or lowwer case
    4. font-style : italic
    5. line-height is distance between two lines
    6. text-decoration : none // removes all text decoration from a text
    7. a:link is for a tag which has link href
    8. a:visited is for tag a which is visited
    9. a:hover if for link clicked
    10. selector precedence : ID → class or peeudo class → Element selector → universal selector
    if same id is written multiple times with different attributes , attributes with id written last in code is considered
    11. border property is not inhertited to children of element

    * (universal selector) does not involve inheritance

#CSS BOX model :

1. content : content of the element.
2. padding is distance between border and content , still a prat of element.
3. border : border of element.
4. element width = left border width + left padding widh + content width + right padding width + right border width.
5. element hight = top border height + top padding height + content height + bottom padding height + bottom border height.
6. padding increase or decrease can will increase or decrease the element size.
7. Margin increase of decrease will increase and decrease distance between two elements.
8. padding : value → will apply padding to all 4 sides
9. padding : valule1, value2 → value 1 is for padding at top and bottom , value 2 is for left and right side
10. specifing the height and setting to auto, will woek only if HTML element have height itself
11.
12. for inline elements , height and width property does not effect , padding and margin only effect hroizontally on the element
    some default inline elements : a , img , strong , em , etc
13. if height is hard coded , then it is not felxible to accomodate all elements, so usually hard coded height is not provided to elements
14. at time of absolute positioning, top bottom let and right are relative to viewport, if we want this to position to any element make parent element as position relative
15. Pseudo element is not a element in HTML
16. clearing floats only works with display block and not inline
17. elements that come after float will come after the element which is floated

#Flex-box:

1. Flexbox is set of related css properties , we can use to build one dimensional layout.

2. It allow browser to divide space in container elements for its child elements.

3. Flex property can be applied on parent container only which is also termed as flex box.

4. Children elements are termed as flex-items

5. they have main-axis and cross-axis

6. They are for replacing old school floats.

7. align-items : align vertically
8. justify-content : align horizontally
9. gap : provides specific gap between flex items
10. align-self: this property is applied on flex items with values flex-start , flex-end , strech
    by default value is strech
11. order : this is applied on flex-items lower vlue mover element to left side , higher value moves to right side, by default value is 0
12. flex-basis : set width to flex-items in terms of px
13. flex-grow : will allow elements to grow as per space of parent contianer
14. flex-shirnk : this does exactly opposit of flex-shrink
15. flex : first value → flex-grow second value → flex-shrink third value → flex-basis

#CSS Grid

1. used to create grid, with display property as `grid`
2. parent element is called grid , and child elemnts are called grid items
3. height of row, is considered as max height of all child elemnts in a single row
4. grid-template-columns : will create a column with specified width , accpet values in px or percentages
5. grid-template-rows : will create a rows with specified height , accept values in px and percentages.
6. gap will provide gap to all 4 sides of each element
7. row-gap : will provide between each rows
8. column-gap : will provide gap between each cols

# Shadow

1st value is horizontal offset
2nd value is vertical offset
3rd value is opacity
4th value is optional which is to scale shadow up
5th value is color of shadow
