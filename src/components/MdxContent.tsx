import * as runtime from 'react/jsx-runtime'

interface MdxProps {
  code: string
}

const getMDXComponent = (code: string) => {
  // Evaluate Velite's compiled function body with the React JSX runtime
  const fn = new Function(code)
  return fn({ ...runtime }).default
}

export function MdxContent({ code }: MdxProps) {
  const Component = getMDXComponent(code)
  return <Component />
}