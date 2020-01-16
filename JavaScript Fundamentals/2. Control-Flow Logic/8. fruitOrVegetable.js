/**
 * Write a JS function to print "fruit", "vegetable" or "unknown" depending on the input string.
 *  Fruits are: 
 *      banana, apple, kiwi, cherry, lemon, grapes, peach
 *  Vegetable are: 
 *      tomato, cucumber, pepper, onion, garlic, parsley
 *  All others are unknown
 * The input comes as a single string argument, the name of the fruit.
 * The output should be printed to the console.
 * 
 * Input: banana
 * Output: fruit
 * 
 * Input: cucumber
 * Output: vegetable
 * 
 * Input: pizaa
 * Output: unknown
 */

console.log("8. Fruit or Vegetable");

function fruitOrVegetable(foodName)
{
    var fruits = ["banana", "apple", "kiwi", "cherry", "lemon", "grapes", "peach"];
    var vegetables = ["tomato", "cucumber", "pepper", "onion", "garlic", "parsley"];
    var found = false;
    var foodType = "";
    
    while (found == false)
    {
        //loop through fruits array
        for (let f = 0; f < fruits.length; f++)
        {
            if (foodName == fruits[f])
            {
                found = true;
                foodType = "fruit";
                break;
            }
        }

        //loop through vegetable array
        for (let v = 0; v < vegetables.length; v++)
        {
            if (foodName == vegetables[v])
            {
                found = true;
                foodType = "vegetable";
                break;
            }
        }

        //everything else
        if (found != true)
        {
            found = true;
            foodType = "unknown";
            break;
        }
    }

    console.log(foodType);
    
}

fruitOrVegetable("banana");
fruitOrVegetable("cucumber");
fruitOrVegetable("pasta");
fruitOrVegetable("grapes");
fruitOrVegetable("pizza");
fruitOrVegetable("onion");