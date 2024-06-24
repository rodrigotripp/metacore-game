/* eslint-disable react/function-component-definition */
// eslint-disable-next-line import/no-extraneous-dependencies
import { Spinner } from '@nextui-org/spinner';
import { FC } from 'react';

function withLoading<P extends object>(
  Component: React.ComponentType<P>,
): React.FC<P & { isLoading: boolean }> {
  const WithLoading: FC<P & { isLoading: boolean }> = (
    { isLoading, ...props }: { isLoading: boolean } & P,
  ) => {
    if (isLoading) {
      return <Spinner />;
    }

    return <Component {...(props as P)} />;
  };

  return WithLoading;
}

export default withLoading;
