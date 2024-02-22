const microCMSLoader = ({ src, width, quality }: any) => {
  return `${src}?auto=format&fit=max&w=${width}`
}

export default microCMSLoader