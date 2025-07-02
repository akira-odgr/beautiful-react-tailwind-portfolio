import { ArrowDown } from "lucide-react";

export const ScrollArrow = () => {
    return (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col item-center justify-center gap-y-2">
            <span className="text-sm text-muted-foreground  tracking-[0.3em] writing-vertical-rl">
                {" "}
                Scroll{" "}
            </span>
            <ArrowDown className="h-full w-full text-primary animate-bounce" />
        </div>
    );
};
