import React from 'react';

// Common SVG Icons extracted from the HTML snippet
const DataProcessingIcon = () => (
  <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10.1436 9.26632C10.2422 8.1864 10.3303 7.05824 10.3303 6.00012C10.3303 4.52404 10.1588 3.0905 10.0266 1.72074C9.98261 1.26495 9.59723 0.897753 9.10428 0.835673C7.92097 0.686653 6.68565 0.499023 5.41517 0.499023C4.14469 0.499023 2.90936 0.686653 1.72606 0.835673C1.23311 0.897753 0.847728 1.26495 0.80373 1.72074C0.671505 3.0905 0.5 4.52404 0.5 6.00012C0.5 7.19623 0.612616 8.36441 0.725692 9.49332C0.81697 10.4047 1.59054 11.1478 2.57614 11.274C3.49703 11.392 4.44586 11.5012 5.41517 11.5012C6.69591 11.5012 8.41445 11.4564 9.67376 11.3851C10.3124 11.3489 10.9504 11.3048 11.5881 11.2565C12.548 11.1827 13.3044 10.4763 13.3572 9.59182C13.4537 7.97379 13.4907 6.23915 13.5 4.54307C13.5029 4.01845 13.0401 3.59316 12.4696 3.59316H10.2086M7.31348 8.46982H3.64808M3.44183 5.46038C3.47617 5.6983 3.67083 5.8834 3.91029 5.90453C4.42264 5.94974 4.95678 6.00473 5.50577 6.00473C6.05475 6.00473 6.5889 5.94974 7.10125 5.90453C7.34071 5.8834 7.53537 5.6983 7.56971 5.46038C7.62299 5.09125 7.67999 4.70805 7.67999 4.31503C7.67999 3.92202 7.62299 3.53882 7.56971 3.16969C7.53537 2.93177 7.34071 2.74667 7.10125 2.72554C6.5889 2.68033 6.05475 2.62533 5.50577 2.62533C4.95678 2.62533 4.42264 2.68033 3.91029 2.72554C3.67083 2.74667 3.47617 2.93177 3.44183 3.16969C3.38855 3.53882 3.33154 3.92202 3.33154 4.31503C3.33154 4.70805 3.38855 5.09125 3.44183 5.46038Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const DefaultIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
  </svg>
);

export type NavItem = {
  label: string;
  href: string;
  icon?: React.ReactNode;
};

export type NavGroup = {
  title: string;
  items: NavItem[];
};

export type MegaMenuSection = {
  columns: NavGroup[];
  footer?: {
    title: string;
    description: string;
    ctaText: string;
    ctaHref: string;
  };
};

export type NavigationConfig = {
  simpleLinks: NavItem[];
  megaMenus: {
    [key: string]: MegaMenuSection;
  };
};

export const navigationData: NavigationConfig = {
  simpleLinks: [
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" }
  ],
  megaMenus: {
    "Platform": {
      columns: [
        {
          title: "Business Outcomes",
          items: [
            { label: "Data Processing", href: "/outcomes/extraction-abstraction", icon: <DataProcessingIcon /> },
            { label: "Decision Intelligence", href: "/outcomes/observability-reporting", icon: <DefaultIcon /> },
            { label: "Business Process Automation", href: "/outcomes/workflow-automation", icon: <DefaultIcon /> },
            { label: "Agentic Workforce", href: "/outcomes/knowledge-on-demand", icon: <DefaultIcon /> }
          ]
        },
        {
          title: "Platform",
          items: [
            { label: "Overview", href: "/capabilities/production-ai", icon: <DefaultIcon /> },
            { label: "Agent Orchestrator", href: "/capabilities/agentic-ai", icon: <DefaultIcon /> },
            { label: "Knowledge Fabric", href: "/capabilities/knowledge-fabric", icon: <DefaultIcon /> },
            { label: "Data Warehouse", href: "/capabilities/data-management", icon: <DefaultIcon /> },
            { label: "Voice Agents", href: "/capabilities/ai-voice-agents", icon: <DefaultIcon /> }
          ]
        }
      ],
      footer: {
        title: "Meet Unframe AI OS.",
        description: "Bringing together enterprise data, operational context, and agentic intelligence into one open platform.",
        ctaText: "See Platform Overview",
        ctaHref: "/platform"
      }
    },
    "Industries": {
      columns: [
        {
          title: "Top Industries",
          items: [
            { label: "Financial Services", href: "/industries/financial-services", icon: <DefaultIcon /> },
            { label: "Insurance", href: "/industries/insurance", icon: <DefaultIcon /> },
            { label: "Healthcare", href: "/industries/life-sciences", icon: <DefaultIcon /> },
            { label: "Manufacturing", href: "/industries/industrial", icon: <DefaultIcon /> },
            { label: "Real Estate", href: "/industries/real-estate", icon: <DefaultIcon /> },
            { label: "Retail", href: "/industries/retail", icon: <DefaultIcon /> }
          ]
        }
      ]
    },
    "Resources": {
      columns: [
        {
          title: "Discover",
          items: [
            { label: "Resource Center", href: "/resources", icon: <DefaultIcon /> },
            { label: "Webinars", href: "/webinars", icon: <DefaultIcon /> },
            { label: "Customer Stories", href: "/customers", icon: <DefaultIcon /> },
            { label: "Blog", href: "/blog", icon: <DefaultIcon /> },
            { label: "Workshops", href: "/workshop", icon: <DefaultIcon /> }
          ]
        },
        {
          title: "Support",
          items: [
            { label: "Customer Support", href: "/customer-support", icon: <DefaultIcon /> },
            { label: "Partners", href: "/partners", icon: <DefaultIcon /> },
            { label: "Integrations", href: "/integrations", icon: <DefaultIcon /> }
          ]
        }
      ]
    }
  }
};
