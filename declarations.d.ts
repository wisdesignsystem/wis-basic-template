declare module '*.css'
declare module '*.module.css' {
  const classes: { readonly [key: string]: string }
  export default classes
}
declare module '*.less'
declare module '*.module.less' {
  const classes: { readonly [key: string]: string }
  export default classes
}
declare module '*.scss'
declare module '*.module.scss' {
  const classes: { readonly [key: string]: string }
  export default classes
}
declare module '*.svg'
declare module '*.png'
declare module '*.bmp'
declare module '*.gif'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.json'
declare module '*.txt'
declare module "@wisdesign/lsicon";