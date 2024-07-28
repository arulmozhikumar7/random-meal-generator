import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardDescription,
} from "./components/ui/card";
import { Button } from "./components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Youtube, Laugh } from "lucide-react";
import Social from "./Social";
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"

interface Props {
    strMeal: string;
    strCategory: string;
    strArea: string;
    strInstructions: string;
    strMealThumb: string;
    strTags: string;
    strYoutube: string;
    strIngredients: { ingredient: string; measure: string }[];
}

const MealCard: React.FC<Props> = ({ strMeal, strCategory, strArea, strInstructions, strMealThumb, strTags, strYoutube, strIngredients }: Props) => {
    return (
        <Card className="w-full max-w-4xl my-4 border border-base-300 shadow-2xl">
            <CardHeader className="flex flex-col md:flex-row justify-between items-center gap-4">
                <img
                    src={strMealThumb}
                    alt={strMeal}
                    className="w-32 h-32 md:w-44 md:h-44 rounded-full object-cover"
                />
                <CardTitle className="flex flex-col justify-center gap-2 w-full md:w-auto">
                    <h2>{strMeal}</h2>
                    <CardDescription className="flex flex-col gap-2">
                        <p>{strCategory} - {strArea}</p>
                    </CardDescription>
                </CardTitle>
                <CardDescription className="flex flex-col justify-center w-full md:w-auto">
                    {strYoutube && (
                        <HoverCard>
                            <HoverCardTrigger>
                                <Button variant="outline" className="hover:bg-accent hover:text-accent-foreground">
                                    <a href={strYoutube} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                                        <p>Watch on Youtube</p>
                                        <Youtube className="hover:text-red-700" />
                                    </a>
                                </Button>
                            </HoverCardTrigger>
                            <HoverCardContent>
                                <div className="flex justify-between space-x-4">
                                    <Avatar>
                                        <AvatarImage src={strMealThumb} />
                                        <AvatarFallback>VC</AvatarFallback>
                                    </Avatar>
                                    <div className="space-y-1">
                                        <h4 className="text-sm font-semibold">{strMeal}</h4>
                                        <iframe
                                            src={`https://www.youtube.com/embed/${strYoutube.split("v=")[1]}`}
                                            title="YouTube video player"
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                            className="w-full aspect-video"
                                        ></iframe>
                                        <div className="flex items-center pt-2">
                                            <span className="text-xs text-muted-foreground">
                                                Play and watch on Youtube. Press F to fullscreen
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </HoverCardContent>
                        </HoverCard>
                    )}
                </CardDescription>
            </CardHeader>
            <CardContent>
                <p className="mt-2 mb-4 text-justify border border-base-300 p-4">{strInstructions}</p>
                <div className="flex flex-col md:flex-row justify-between">
                    <div className="w-full md:w-1/3">
                        <div className="mb-4 border border-base-300 p-4">
                            <h3 className="font-semibold">Ingredients:</h3>
                            <ul className="list-disc list-inside">
                                {strIngredients.map((item, index) => (
                                    <li key={index}>{item.measure} {item.ingredient}</li>
                                ))}
                            </ul>
                        </div>
                        {strTags && (
                            <div className="mb-4">
                                <h3 className="font-semibold">Tags:</h3>
                                <p>{strTags.split(',').join(', ')}</p>
                            </div>
                        )}
                    </div>
                    <div className="flex flex-col justify-center w-full md:w-2/3 items-center">
                        <p className="flex items-center text-sm md:text-lg">
                            Made by 
                            <a href="https://www.arulmozhikumar.online" target="_blank" rel="noopener noreferrer" className="ml-2 text-blue-500 flex items-center gap-1">
                                Arulmozhikumar <Laugh />
                            </a>
                        </p>
                        <Social />
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default MealCard;
