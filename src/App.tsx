import { Button } from "./components/ui/button";
import MealCard from "./MealCard";
import { useState } from "react";
import getMeal from "./hooks/getMeal";
import { Soup } from "lucide-react";
import Loading from "./Loading";

interface Meal {
    strMeal: string;
    strCategory: string;
    strArea: string;
    strInstructions: string;
    strMealThumb: string;
    strTags: string;
    strYoutube: string;
    strIngredients: { ingredient: string; measure: string }[];
}

const App = () => {
    const [meal, setMeal] = useState<Meal | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const handleClick = async () => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await getMeal();
            const mealData = response?.data.meals[0];

            const ingredients = [];
            for (let i = 1; i <= 20; i++) {
                const ingredient = mealData[`strIngredient${i}`];
                const measure = mealData[`strMeasure${i}`];
                if (ingredient && measure) {
                    ingredients.push({ ingredient, measure });
                }
            }

            setMeal({ ...mealData, strIngredients: ingredients });
        } catch (error) {
            setError("Failed to fetch meal. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center p-4">
            <h1 className="text-xl text-center md:text-3xl font-bold mb-4">Random Meal Generator</h1>
            <h2 className="text-lg text-center md:text-xl font-bold mb-4">Feeling hungry?</h2>
            <Button onClick={handleClick} className="flex items-center gap-2">
                Get Meal <Soup />
            </Button>
            {isLoading ? (
                <Loading />
            ) : error ? (
                <p className="text-red-500">{error}</p>
            ) : meal ? (
                <MealCard
                    strMeal={meal.strMeal}
                    strCategory={meal.strCategory}
                    strArea={meal.strArea}
                    strInstructions={meal.strInstructions}
                    strMealThumb={meal.strMealThumb}
                    strTags={meal.strTags}
                    strYoutube={meal.strYoutube}
                    strIngredients={meal.strIngredients}
                />
            ) : null}
        </div>
    );
};

export default App;
