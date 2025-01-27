import { Skeleton } from "@/components/ui/skeleton";


export const BuildSkeleton = () => {
    return (
        <div className="my-3">
            <Skeleton className="w-[295px] h-[298px]" />
            <div className="mt-3">
                <Skeleton className="w-[150px] h-5" />
                <Skeleton className="w-[120px] h-5 mt-3" />
            </div>
        </div>
    );
}