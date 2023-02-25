// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismicT from "@prismicio/types";
import type * as prismic from "@prismicio/client";

type Simplify<T> = {
    [KeyType in keyof T]: T[KeyType];
};
/** Content for posts documents */
interface PostsDocumentData {
    /**
     * imagem field in *posts*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: posts.imagem
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    imagem: prismicT.ImageField<never>;
    /**
     * titulo field in *posts*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: posts.titulo
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    titulo: prismicT.KeyTextField;
    /**
     * conteudo field in *posts*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: Insira o conteúdo da sua postagem
     * - **API ID Path**: posts.conteudo
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    conteudo: prismicT.RichTextField;
    /**
     * descricaoPrevia field in *posts*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: posts.descricaoprevia
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    descricaoprevia: prismicT.KeyTextField;
}
/**
 * posts document from Prismic
 *
 * - **API ID**: `posts`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PostsDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<PostsDocumentData>, "posts", Lang>;
export type AllDocumentTypes = PostsDocument;
declare module "@prismicio/client" {
    interface CreateClient {
        (repositoryNameOrEndpoint: string, options?: prismic.ClientConfig): prismic.Client<AllDocumentTypes>;
    }
    namespace Content {
        export type { PostsDocumentData, PostsDocument, AllDocumentTypes };
    }
}
