<!-- orderprocess.php -->
<!DOCTYPE html>
<html>
<head>
    <title>Order Summary</title>
</head>
<body>
    <?php
    $pizza_price = 16.99;
    $topping_price = isset($_POST['toppings']) ? (float) $_POST['toppings'] : 0.00;
    $tax_rate = 0.095; // 9.5%

    // Calculate total cost
    $subtotal = $pizza_price + $topping_price;
    $tax = $subtotal * $tax_rate;
    $total_cost = $subtotal + $tax;

    // Display order summary
    echo "<h3>Order Summary</h3>";
    echo "Pizza Price: $ " . number_format($pizza_price, 2) . "<br>";
    echo "Topping Price: $ " . number_format($topping_price, 2) . "<br>";
    echo "Tax Amount: $ " . number_format($tax, 2) . "<br>";
    echo "<strong>Total Cost of your order is: $ " . number_format($total_cost, 2) . "</strong>";
    ?>
</body>
</html>
