<!DOCTYPE html>
<html>
<head>
    <title>Pizza Order Form</title>
</head>
<body>
    <form action="orderprocess.php" method="post">
        <h3>Select the number of toppings you want on your pizza:</h3>
        <input type="radio" name="toppings" value="0" checked> No Extra Toppings<br>
        <input type="radio" name="toppings" value="2.00"> One Topping<br>
        <input type="radio" name="toppings" value="3.00"> Two Toppings<br>
        <input type="radio" name="toppings" value="3.75"> Three Toppings<br>
        <br>
        <input type="submit" value="Order Now">
    </form>
</body>
</html>
