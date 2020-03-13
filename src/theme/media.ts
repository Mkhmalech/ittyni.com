import { css } from "."

export const media = {
    lessThan(breakpoint: string, print?: boolean){
        return (...args : any[]) => css`
            @media ${print ? 'print, ' : ''} screen and (max-width: ${(props: any) =>
                props.theme.breakpoints[breakpoint]}) {
              ${(css as any)(...args)};
            }
        `
    }
}