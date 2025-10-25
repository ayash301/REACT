import React, { useEffect } from "react";

function withLogger<P extends object>(WrappedComponent: React.ComponentType<P>) {
  return (props: P) => {
    useEffect(() => {
      console.log("Props diterima:", props);
    }, [props]);

    return <WrappedComponent {...props} />;
  };
}

const SimpleMessage = ({ message }: { message: string }) => (
  <p>{message}</p>
);

const WithLoggerDemo = withLogger(SimpleMessage);

export default () => <WithLoggerDemo message="HOC Logging aktif di console" />;
