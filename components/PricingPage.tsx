import { PricingPlan, pricingPlan } from "@/lib/pricingplan";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

const PricingPage = () => {
  return (
    <div>
      <div className="text-center mb-16">
        <h1 className="font-extrabold text-3xl">Plan And Pricing</h1>
        <p className="text-gray-500">
          Receive unlimited credits when you pay erl, and save your plan.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-6">
        {pricingPlan.map((plan: PricingPlan, index: number) => (
          <Card
            className={`${
              plan.level === "Enterprise" && "bg-[#1c1c1c] text-white"
            }  w-[350px] flex flex-col justify-between`}
            key={index}
          >
            <CardHeader className="flex flex-row items-center gap-2">
              <CardTitle>{plan.level}</CardTitle>
              {plan.level === "Professional" && (
                <Badge className="rounded-full bg-orange-600 hover:bg-null">🔥 Popular</Badge>
              )}
            </CardHeader>
            <CardContent className="flex-1">
              <p className="text-2xl font-bold">{plan.price}</p>
              <ul className="mt-4 space-y-2">
                {plan.services.map((item: string, index: number) => (
                  <li className="flex items-center" key={index}>
                    <span className="text-green-500 mr-2">✔</span>
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button
                variant="outline"
                className={`${
                  plan.level === "Enterprise"
                    ? "bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 text-purple-500"
                    : " bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 text-purple-500"
                } w-full mt-10 border-t border-gray-300`}
              >
                Get Started with {plan.level}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PricingPage;

// https://youtu.be/DNlBTMuGMso?t=4714 1:18
