declare module '*.jpg' {
  const value: string;
  export default value;
}

declare module '*.png' {
  const value: string;
  export default value;
}

declare module '*.jpeg' {
  const value: string;
  export default value;
}
declare module '*.svg' {
  import { ReactElement, SVGProps } from 'react';
  const content: ReactElement<SVGProps<SVGSVGElement>>;
  export default content;
}
