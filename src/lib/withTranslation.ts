import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export const withTranslation = <T extends Record<string, any>>(
  keys: string | string[] = [],
  getServerSidePropsFunc: GetServerSideProps<T> = async () => ({
    props: {} as T,
  })
): GetServerSideProps => {
  return async (ctx: GetServerSidePropsContext) => {
    const result = await getServerSidePropsFunc(ctx);

    const props = (result as any)["props"] as T;

    if (!props) {
      return result;
    }

    const { locale } = ctx;

    keys = typeof keys === "string" ? ["common", keys] : ["common", ...keys];

    return {
      props: {
        ...props,
        ...(await serverSideTranslations(locale, keys)),
      },
    };
  };
};
