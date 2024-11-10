import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"
import { cursor } from "sisteransi"
import left = cursor.left

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  left: [
    Component.Darkmode(),
    Component.MobileOnly(Component.Spacer()),
    Component.Nav(undefined),
    Component.Search(), //검색 기능
    Component.DesktopOnly(
      Component.Explorer({
        title: "드롭다운",
        folderClickBehavior: "collapse",
        folderDefaultState: "collapsed",
        useSavedState: true,
        // public 폴더의 파일만 필터링
        // filterFn: (node) => {
        //   const path = node.file?.relativePath ?? node.name
        //   return path.startsWith("public")
        // },
        sortFn: (a, b) => a.name.localeCompare(b.name),
      }),
    ),
  ],
  // footer: Component.RecentNotes({ title: "RecentNotes" })
  footer: Component.ContentMeta()
}


// 리스트 페이지 컴포넌트 (e.g home> 노트) 페이지
export const defaultListPageLayout: PageLayout = {
  header: [Component.Breadcrumbs(), Component.ContentMeta(), ],
  beforeBody: [Component.Graph()],
  afterBody: [
  ],
  right: [
    // Component.Graph(),
    // Component.Backlinks(),
  ],
}



// 단일 페이지 컴포넌트 (content 페이지) (e.g home> 노트 > 제목) 페이지
export const defaultContentPageLayout: PageLayout = {
  header: [Component.ArticleTitle()],
  beforeBody: [

    Component.Breadcrumbs(),
    // Component.ArticleTitle(), // 글 제목
    Component.ContentMeta(), // 메타 정보
  ],
  afterBody: [
    Component.Comments({
      provider: "giscus",
      options: {
        // from data-repo
        repo: "ruukr8080/ruukr8080.github.io",
        // from data-repo-id
        repoId: "R_kgDOND4Puw",
        // from data-category
        category: "댓글",
        // from data-category-id
        categoryId: "DIC_kwDOND4Pu84Cj71_",
      },
    }),
  ],
  right: [
    // Component.Graph(),
    // Component.TableOfContents(), // 목차
    // Component.DesktopOnly(Component.TableOfContents()),
    // Component.Backlinks(),
  ],
}

