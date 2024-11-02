// Components 
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle
} from "@/components/ui/card"

export const LoginCard = () => {
    return (
        <Card className="w-full h-full md:w-[487px] border-none shadow-none">
          <CardHeader>
            <CardTitle className="text-2xl">
                Welcome back!
            </CardTitle>
          </CardHeader>
        </Card>
    )
}