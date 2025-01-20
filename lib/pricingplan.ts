export type PricingPlan = {
  level: string;
  price: string;
  services: string[];
};

export const pricingPlan: PricingPlan[] = [
  {
    level: "Free",
    price: "$0/month",
    services: ["3 Free Credits", "Basic Support", "Limited Features", "Community Access"],
  },
  {
    level: "Professional",
    price: "$49/month",
    services: [
      "Unlimited Credits",
      "Priority Support",
      "Advanced Features",
      "Access to Exclusive Content",
      "Team Collaboration Tools",
      "Enhanced Security Measures",
    ],
  },
  {
    level: "Enterprise",
    price: "Custom Pricing",
    services: [
      "Dedicated Account Manager",
      "Custom Integrations",
      "API Access",
      "Advanced Analytics & Reporting",
      "Enterprise-Grade Security",
      "Tailored Solutions",
      "Onboarding & Training",
      "24/7 Dedicated Support",
    ],
  },
];
