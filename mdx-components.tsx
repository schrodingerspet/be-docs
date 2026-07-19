import type { MDXComponents } from 'mdx/types'
import { Callout } from './src/components/mdx/Callout'
import { MetricCard } from './src/components/mdx/MetricCard'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    Callout,
    MetricCard,
    ...components,
  }
}
