// Live demo: https://awywi-code-examples-after-responses.surge.sh/

const CodeExamplesAfterResponsesPlugin = () => {
  return {
    wrapComponents: {
      responses: (Responses, { React }) => (props) => {
        return <div>
          <Responses {...props} />
          <iframe src="https://docs.cloudmersive.com" width="100%" height="30px" />
        </div>
      }
    }
  }
}