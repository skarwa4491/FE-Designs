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
