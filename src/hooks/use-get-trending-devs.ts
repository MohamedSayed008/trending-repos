import { HookReturnType, ICallbackParams, useApiHookWrapper } from '@hooks/use-api-hook-wrapper';
import { getTrendingDevs } from '@api/get-trending-devs';
import { DevelopersRes } from '@pages/api/devs';

type Input = unknown;
type Output = DevelopersRes[];

const mountFn = async () => {
  const { data } = await getTrendingDevs();

  return data;
};

const errorFn = async (props: ICallbackParams<Input, Output>) => {
  const { error, exception } = props;

  if (!error || !exception) {
    return {};
  }

  return { error, exception };
};

export const useGetTrendingDevs = (): HookReturnType<Input, Output> => {
  return useApiHookWrapper({
    initialInput: undefined,
    initialIsLoading: false,
    mountFn,
    unmountFn: undefined,
    skipInitialApiCallOnEmptyInputs: false,
    errorFn: errorFn,
  });
};
