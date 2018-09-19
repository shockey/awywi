// Live demo at https://awywi-only-display-operations.surge.sh/

const OnlyDisplayOperationsPlugin = (system) => {
  return {
    components: {
      OperationsLayout: system.React.createClass({
        render: function() {
          const Operations = system.getComponent("operations", true)

          return <div className="swagger-ui">
            <Operations />
          </div>
        }
      })
    }
  }
}

// Example of calling Swagger UI so that this plugin takes effect

const ui = SwaggerUI({
  url: "https://petstore.swagger.io/v2/swagger.json",
  dom_id: '#swagger-ui',
  plugins: [
    OnlyDisplayOperationsPlugin
  ],
  layout: "OperationsLayout"
})
