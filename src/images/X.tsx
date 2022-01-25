interface Props {
  color: string;
  size: number
}

export const X = ({ color, size }: Props) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M17.854 6.14598C17.9006 6.19242 17.9375 6.2476 17.9627 6.30834C17.9879 6.36909 18.0009 6.43421 18.0009 6.49998C18.0009 6.56575 17.9879 6.63087 17.9627 6.69161C17.9375 6.75236 17.9006 6.80753 17.854 6.85398L6.85402 17.854C6.76013 17.9479 6.6328 18.0006 6.50002 18.0006C6.36725 18.0006 6.23991 17.9479 6.14602 17.854C6.05213 17.7601 5.99939 17.6328 5.99939 17.5C5.99939 17.3672 6.05213 17.2399 6.14602 17.146L17.146 6.14598C17.1925 6.09941 17.2476 6.06247 17.3084 6.03727C17.3691 6.01206 17.4343 5.99908 17.5 5.99908C17.5658 5.99908 17.6309 6.01206 17.6917 6.03727C17.7524 6.06247 17.8076 6.09941 17.854 6.14598Z" fill={color}/>
    <path fillRule="evenodd" clipRule="evenodd" d="M6.14604 6.14598C6.09948 6.19242 6.06253 6.2476 6.03733 6.30834C6.01212 6.36909 5.99915 6.43421 5.99915 6.49998C5.99915 6.56575 6.01212 6.63087 6.03733 6.69161C6.06253 6.75236 6.09948 6.80753 6.14604 6.85398L17.146 17.854C17.2399 17.9479 17.3673 18.0006 17.5 18.0006C17.6328 18.0006 17.7602 17.9479 17.854 17.854C17.9479 17.7601 18.0007 17.6328 18.0007 17.5C18.0007 17.3672 17.9479 17.2399 17.854 17.146L6.85404 6.14598C6.80759 6.09941 6.75242 6.06247 6.69167 6.03727C6.63093 6.01206 6.56581 5.99908 6.50004 5.99908C6.43427 5.99908 6.36915 6.01206 6.30841 6.03727C6.24766 6.06247 6.19248 6.09941 6.14604 6.14598Z" fill={color}/>
    </svg>

  )
}