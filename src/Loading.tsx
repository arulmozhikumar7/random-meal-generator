import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardDescription,
} from "./components/ui/card";
import { Button } from "./components/ui/button";
import { Skeleton } from "./components/ui/skeleton";

const Loading: React.FC = () => {
    return (
        <Card className="w-full max-w-4xl my-4 border border-base-300 shadow-2xl">
            <CardHeader className="flex-col md:flex-row justify-between items-center gap-4">
                <Skeleton className="w-44 h-44 rounded-full object-cover" />
                <CardTitle className="flex flex-col justify-center gap-2">
                    <Skeleton className="h-6 w-1/2" />
                    <CardDescription className="flex flex-col gap-2">
                        <Skeleton className="h-4 w-1/3" />
                    </CardDescription>
                </CardTitle>
                <CardDescription className="flex flex-col justify-center">
                    <Button variant="outline" disabled className="hover:bg-accent hover:text-accent-foreground">
                        <a target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                            <Skeleton className="h-4 w-24" />
                          
                        </a>
                    </Button>
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Skeleton className="h-4 w-full mt-2 mb-4" />
               
                    <ul className="list-inside">
                        {[...Array(5)].map((_, index) => (
                            <li key={index}>
                                <Skeleton className="h-4 w-3/4" />
                            </li>
                        ))}
                    </ul>
                
                <div className="mb-4">

                    <Skeleton className="h-4 w-1/2" />
                </div>
            </CardContent>
        </Card>
    );
};

export default Loading;
