// Live demo: https://awywi-code-examples-after-responses.surge.sh/

const CodeExamplesAfterResponsesPlugin = () => {
  return {
    wrapComponents: {
      responses: (OriginalComponent, { React }) => (props) => {
        return <div>
          <OriginalComponent {...props} />
          <iframe src="https://docs.cloudmersive.com" width="100%" height="300px" />
        </div>
      }
    }
  }
}
