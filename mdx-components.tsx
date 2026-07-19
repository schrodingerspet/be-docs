import type { MDXComponents } from 'mdx/types'
import { Callout } from './src/components/mdx/Callout'
import { MetricCard } from './src/components/mdx/MetricCard'
import { Grid, GridCard } from './src/components/mdx/Grid'
import { Tabs } from './src/components/mdx/Tabs'
import { ComparisonBlock } from './src/components/mdx/ComparisonBlock'
import { ImageFigure } from './src/components/mdx/ImageFigure'
import { Accordion } from './src/components/mdx/Accordion'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    Callout,
    MetricCard,
    Grid,
    GridCard,
    Tabs,
    ComparisonBlock,
    ImageFigure,
    Accordion,
    ...components,
  }
}
