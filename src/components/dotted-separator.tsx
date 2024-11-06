// Shad cn Function
import { cn } from "@/lib/utils";

// Separator Props
import { DottedSeparatorProps } from "@/interfaces";

export const DottedSeparator = ({
    className,
    color = "#d4d4d8",
    height = "1px",
    dotSize = "2px",
    gapSize = "2px",
    direction = "horizontal"
}: DottedSeparatorProps) => {
    
    const isHorizontal = direction === "horizontal";

    const dotSizeNum = parseInt(dotSize);
    const gapSizeNum = parseInt(gapSize);
    const heightNum = parseInt(height);

    return (
        <div
            className={cn(
                isHorizontal ? "w-full flex items-center" : "h-full flex flex-col items-center",
                className
            )}
        >
            <div
                style={{
                    width: isHorizontal ? "100%" : `${heightNum}px`,
                    height: isHorizontal ? `${heightNum}px` : "100%",
                    backgroundImage: `radial-gradient(circle, ${color} ${dotSizeNum}px, transparent ${dotSizeNum}px)`,
                    backgroundSize: isHorizontal
                        ? `${dotSizeNum + gapSizeNum}px ${heightNum}px`
                        : `${heightNum}px ${dotSizeNum + gapSizeNum}px`,
                    backgroundRepeat: isHorizontal ? "repeat-x" : "repeat-y",
                    backgroundPosition: "center"
                }}
            />
        </div>
    );
};
