import { HookReturnType, ICallbackParams, useApiHookWrapper } from '@hooks/use-api-hook-wrapper';
import { getTrendingRepos } from '@api/get-trending-repos';
import { RepositoriesRes } from '@pages/api/repos';

type Input = unknown;
type Output = RepositoriesRes[];

const mountFn = async () => {
  const { data } = await getTrendingRepos();

  return data;
};

const errorFn = async (props: ICallbackParams<Input, Output>) => {
  const { error, exception } = props;

  if (!error || !exception) {
    return {};
  }

  return { error, exception };
};

export const useGetTrendingRepos = (): HookReturnType<Input, Output> => {
  return useApiHookWrapper({
    initialInput: undefined,
    initialIsLoading: false,
    mountFn,
    unmountFn: undefined,
    skipInitialApiCallOnEmptyInputs: false,
    errorFn: errorFn,
  });
};
