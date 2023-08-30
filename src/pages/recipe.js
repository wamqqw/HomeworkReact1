import React from "react";

function Recipe() {
    const Recipe = {
        title: "Strudel with cream",
        ingredients: [
            {name: "bread flour", amount: "1 1/2 cups"},
            {name: "vegetable oil", amount: "4 tbsp"},
            {name: "egg whites", amount: "2"},
            {name: "salt", amount: "1/4 tsp"},
            {name: "lemon juice", amount: "1/2 tbsp"},
            {name: "warm water (approximately 110°F) ", amount: "1/4 cup"},
            {name: "good baking apples, peeled (such as granny smith)", amount: "4"},
            {name: "sugar", amount: "1/2 cup"},
            {name: "cinnamon", amount: "1 tbsp"},
            {name: "raisins", amount: "1/2"},
            {name: "lemon", amount: "Zest of 1"},
            {name: "Some lemon juice (optional)", amount: "1"},
            {name: "melted butter", amount: "2 tbsp"},
            {name: "finely chopped hazelnuts and walnuts", amount: "1/2 cup"},
            {name: "beaten egg", amount: "1"},
            {name: "heavy cream", amount: "1 cup"},
            {name: "sugar", amount: "1 tbsp"}
        ],
        method: [
            {desc: "In a medium bowl, place bread flour and make a little well in the middle. In that well, pour vegetable oil, egg whites, salt, and lemon juice. Give this a little mix with your hands until it just barely comes together. Add warm water and mix with hands until it forms a semi-cohesive dough. Add flour if too sticky, but not too much."},
            {desc: "Flour your worktop and just knead the hell out of the dough. Seriously, pound it against the table. Take your frustrations out on the dough until you end up with a soft and supple dough. When finished, place in an oiled bowl and let rest for 30 minutes."},
            {desc: "Peel and finely chop the apples. Place them in a large bowl and season with sugar, cinnamon, raisins, lemon zest, and lemon juice (if you want to prevent the apples from browning). Add a few tablespoons of flour to soak up the moisture. Allow to rest for 30 minutes."},
            {desc: "Cover table in large, clean tablecloth and liberally dust with flour. Plop down your dough and dust your rolling pin with flour. Roll out until it is a large circle, about 18-24 inches wide. Dust your knuckles and carefully pick up your dough. Rotate the dough with your fists carefully, like a fragile pizza pie. Get it as large as you can without tearing it and then set it down. Slowly tug at the edges until it is thin enough so you can see the pattern of the tablecloth through the dough. Slice the rough edges off."},
            {desc: "Using a pastry brush, drizzle the dough with the melted butter. Gently brush the butter so every square inch is covered with melted butter. Sprinkle the chopped walnuts and hazelnuts all over the buttered dough."},
            {desc: "Place a generous row of the spiced apples at the end of the dough square. Using the tablecloth, roll the dough onto itself. Tuck the edges and brush with some more butter. Repeat until the strudel is all rolled up. Seal the edges."},
            {desc: "Preheat oven to 350°F. Place strudel on parchment lined baking sheet and brush down with beaten egg. Place in the oven. Every ten minutes, brush the strudel with melted butter. It should bake for about an hour or until golden brown. Leave on a wire rack to cool."},
            {desc: "After cooled, cut into the strudel. Dust the piece with powder sugar and don’t forget the whipped cream."},
            {desc: "For whipped cream: Place heavy cream and sugar into a bowl. Using a hand mixer, whip the cream and sugar together. "},
            {desc: "If you desire, place the whipped cream into a piping bag and pipe into a bowl, making a nice little mountain of cream. Spoon on top of the pastry."},
        ]
    }

    return(
        <div>
            <img src="strudel.jpg" style={{width: "500px"}}></img>
            <h1>{Recipe.title}</h1>
            <h4>Ingredients: </h4>
            <ul>
                {Recipe.ingredients.map((ingredients) => (
                    <li key={ingredients.name}>{`${ingredients.name}: ${ingredients.amount}`}</li>
                ))}
            </ul>
            <h4>Method: </h4>
            <ol type="1">
                {Recipe.method.map((methods)=> (
                    <li><h4>{methods.desc}</h4></li>
                ))}
            </ol>
        </div>
    )
}
export default Recipe;