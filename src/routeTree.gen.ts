/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as RoutesImport } from './routes/routes'
import { Route as IndexImport } from './routes/index'
import { Route as ColNavImport } from './routes/col/nav'
import { Route as ColColImport } from './routes/col/col'
import { Route as CardNavImport } from './routes/card/nav'
import { Route as CardCardImport } from './routes/card/card'
import { Route as ButtonNavImport } from './routes/button/nav'
import { Route as ButtonButtonImport } from './routes/button/button'

// Create/Update Routes

const RoutesRoute = RoutesImport.update({
  path: '/routes',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const ColNavRoute = ColNavImport.update({
  path: '/col/nav',
  getParentRoute: () => rootRoute,
} as any)

const ColColRoute = ColColImport.update({
  path: '/col/col',
  getParentRoute: () => rootRoute,
} as any)

const CardNavRoute = CardNavImport.update({
  path: '/card/nav',
  getParentRoute: () => rootRoute,
} as any)

const CardCardRoute = CardCardImport.update({
  path: '/card/card',
  getParentRoute: () => rootRoute,
} as any)

const ButtonNavRoute = ButtonNavImport.update({
  path: '/button/nav',
  getParentRoute: () => rootRoute,
} as any)

const ButtonButtonRoute = ButtonButtonImport.update({
  path: '/button/button',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/routes': {
      id: '/routes'
      path: '/routes'
      fullPath: '/routes'
      preLoaderRoute: typeof RoutesImport
      parentRoute: typeof rootRoute
    }
    '/button/button': {
      id: '/button/button'
      path: '/button/button'
      fullPath: '/button/button'
      preLoaderRoute: typeof ButtonButtonImport
      parentRoute: typeof rootRoute
    }
    '/button/nav': {
      id: '/button/nav'
      path: '/button/nav'
      fullPath: '/button/nav'
      preLoaderRoute: typeof ButtonNavImport
      parentRoute: typeof rootRoute
    }
    '/card/card': {
      id: '/card/card'
      path: '/card/card'
      fullPath: '/card/card'
      preLoaderRoute: typeof CardCardImport
      parentRoute: typeof rootRoute
    }
    '/card/nav': {
      id: '/card/nav'
      path: '/card/nav'
      fullPath: '/card/nav'
      preLoaderRoute: typeof CardNavImport
      parentRoute: typeof rootRoute
    }
    '/col/col': {
      id: '/col/col'
      path: '/col/col'
      fullPath: '/col/col'
      preLoaderRoute: typeof ColColImport
      parentRoute: typeof rootRoute
    }
    '/col/nav': {
      id: '/col/nav'
      path: '/col/nav'
      fullPath: '/col/nav'
      preLoaderRoute: typeof ColNavImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  IndexRoute,
  RoutesRoute,
  ButtonButtonRoute,
  ButtonNavRoute,
  CardCardRoute,
  CardNavRoute,
  ColColRoute,
  ColNavRoute,
})

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/routes",
        "/button/button",
        "/button/nav",
        "/card/card",
        "/card/nav",
        "/col/col",
        "/col/nav"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/routes": {
      "filePath": "routes.tsx"
    },
    "/button/button": {
      "filePath": "button/button.tsx"
    },
    "/button/nav": {
      "filePath": "button/nav.tsx"
    },
    "/card/card": {
      "filePath": "card/card.tsx"
    },
    "/card/nav": {
      "filePath": "card/nav.tsx"
    },
    "/col/col": {
      "filePath": "col/col.tsx"
    },
    "/col/nav": {
      "filePath": "col/nav.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
