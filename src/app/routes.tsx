import { lazy, Suspense, type ReactNode } from "react";
import { createBrowserRouter } from "react-router-dom";

import Layout from "../shared/components/Layout";
import ErrorBoundary from "./ErrorBoundary";

// Lazy loading of enterprise pages

const Dashboard = lazy(() => import("../features/enterprise/pages/Dashboard"));

const Zones = lazy(() => import("../features/enterprise/pages/Zones"));

const ZoneDetails = lazy(
  () => import("../features/enterprise/pages/ZoneDetails"),
);

const Meters = lazy(() => import("../features/enterprise/pages/Meters"));

const Users = lazy(() => import("../features/enterprise/pages/Users"));

const Reports = lazy(() => import("../features/enterprise/pages/Reports"));

const Alerts = lazy(() => import("../features/enterprise/pages/Alerts"));

const AuditLogs = lazy(() => import("../features/enterprise/pages/AuditLogs"));

const Settings = lazy(() => import("../features/enterprise/pages/Settings"));

// Common loading component

function Loading() {
  return <h3>Loading page...</h3>;
}

// Common Suspense wrapper

function loadPage(element: ReactNode) {
  return <Suspense fallback={<Loading />}>{element}</Suspense>;
}

// Application routes

export const router = createBrowserRouter([
  {
    path: "/",

    element: (
      <ErrorBoundary>
        <Layout />
      </ErrorBoundary>
    ),

    children: [
      {
        index: true,
        element: loadPage(<Dashboard />),
      },

      {
        path: "dashboard",
        element: loadPage(<Dashboard />),
      },

      // Nested Zone Routes

      {
        path: "zones",

        children: [
          {
            index: true,
            element: loadPage(<Zones />),
          },

          {
            path: ":id",
            element: loadPage(<ZoneDetails />),
          },
        ],
      },

      {
        path: "meters",
        element: loadPage(<Meters />),
      },

      {
        path: "users",
        element: loadPage(<Users />),
      },

      {
        path: "reports",
        element: loadPage(<Reports />),
      },

      {
        path: "alerts",
        element: loadPage(<Alerts />),
      },

      {
        path: "audit-logs",
        element: loadPage(<AuditLogs />),
      },

      {
        path: "settings",
        element: loadPage(<Settings />),
      },
    ],
  },
]);
