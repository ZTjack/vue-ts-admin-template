import {
  VuexModule,
  Module,
  Mutation,
  Action,
  getModule
} from 'vuex-module-decorators'
import { Route } from 'vue-router'
import store from '@/store'

export interface ITagView extends Partial<Route> {
  title?: string
}

export interface ITagsViewState {
  visitedViews: ITagView[]
  cachedViews: (string | undefined)[]
}

@Module({ dynamic: true, store, name: 'tagsView' })
class TagsView extends VuexModule implements ITagsViewState {
  public visitedViews: ITagView[] = []
  public cachedViews: (string | undefined)[] = []

  @Mutation
  private ADD_VISITED_VIEW(view: ITagView) {
    if (this.visitedViews.some(v => v.path === view.path)) return
    this.visitedViews.push(
      Object.assign({}, view, {
        title: view.meta.title || 'no-name'
      })
    )
  }

  @Mutation
  private ADD_CACHED_VIEW(view: ITagView) {
    if (this.cachedViews.includes(view.name)) return
    if (!view.meta.noCache) {
      this.cachedViews.push(view.name)
    }
  }

  @Mutation
  private DEL_VISITED_VIEW(view: ITagView) {
    for (const [i, v] of this.visitedViews.entries()) {
      if (v.path === view.path) {
        this.visitedViews.splice(i, 1)
        break
      }
    }
  }

  @Mutation
  private DEL_CACHED_VIEW(view: ITagView) {
    const index = this.cachedViews.indexOf(view.name)
    index > -1 && this.cachedViews.splice(index, 1)
  }

  @Mutation
  private DEL_OTHERS_VISITED_VIEWS(view: ITagView) {
    this.visitedViews = this.visitedViews.filter(v => {
      return v.meta.affix || v.path === view.path
    })
  }

  @Mutation
  private DEL_OTHERS_CACHED_VIEWS(view: ITagView) {
    const index = this.cachedViews.indexOf(view.name)
    if (index > -1) {
      this.cachedViews = this.cachedViews.slice(index, index + 1)
    } else {
      // if index = -1, there is no cached tags
      this.cachedViews = []
    }
  }

  @Mutation
  private DEL_ALL_VISITED_VIEWS() {
    // keep affix tags
    const affixTags = this.visitedViews.filter(tag => tag.meta.affix)
    this.visitedViews = affixTags
  }

  @Mutation
  private DEL_ALL_CACHED_VIEWS() {
    this.cachedViews = []
  }

  @Mutation
  private UPDATE_VISITED_VIEW(view: ITagView) {
    for (let v of this.visitedViews) {
      if (v.path === view.path) {
        v = Object.assign(v, view)
        break
      }
    }
  }

  @Action
  public addView(view: ITagView) {
    this.ADD_VISITED_VIEW(view)
    this.ADD_CACHED_VIEW(view)
  }

  @Action
  public addVisitedView(view: ITagView) {
    this.ADD_VISITED_VIEW(view)
  }

  @Action
  public addCacheView(view: ITagView) {
    this.ADD_CACHED_VIEW(view)
  }

  @Action
  public delView(view: ITagView) {
    return new Promise(resolve => {
      this.DEL_VISITED_VIEW(view)
      this.DEL_CACHED_VIEW(view)
      resolve({
        visitedViews: [...this.visitedViews],
        cachedViews: [...this.cachedViews]
      })
    })
  }

  @Action
  public delVisitedView(view: ITagView) {
    return new Promise(resolve => {
      this.DEL_VISITED_VIEW(view)
      resolve({
        visitedViews: [...this.visitedViews]
      })
    })
  }

  @Action
  public delCachedView(view: ITagView) {
    return new Promise(resolve => {
      this.DEL_CACHED_VIEW(view)
      resolve([...this.cachedViews])
    })
  }

  @Action
  public delOthersViews(view: ITagView) {
    return new Promise(resolve => {
      this.DEL_OTHERS_VISITED_VIEWS(view)
      this.DEL_OTHERS_CACHED_VIEWS(view)
      resolve({
        visitedViews: [...this.visitedViews],
        cachedViews: [...this.cachedViews]
      })
    })
  }

  @Action
  public delOthersVisitedViews(view: ITagView) {
    return new Promise(resolve => {
      this.DEL_OTHERS_VISITED_VIEWS(view)
      resolve({
        visitedViews: [...this.visitedViews]
      })
    })
  }

  @Action
  public delOthersCachedViews(view: ITagView) {
    return new Promise(resolve => {
      this.DEL_OTHERS_CACHED_VIEWS(view)
      resolve({
        cachedViews: [...this.cachedViews]
      })
    })
  }

  @Action
  public delAllViews() {
    return new Promise(resolve => {
      this.DEL_ALL_VISITED_VIEWS()
      this.DEL_ALL_CACHED_VIEWS()
      resolve({
        visitedViews: [...this.visitedViews],
        cachedViews: [...this.cachedViews]
      })
    })
  }

  @Action
  public delAllVisitedViews() {
    return new Promise(resolve => {
      this.DEL_ALL_VISITED_VIEWS()
      resolve({
        visitedViews: [...this.visitedViews]
      })
    })
  }

  @Action
  public delAllCachedViews() {
    return new Promise(resolve => {
      this.DEL_ALL_CACHED_VIEWS()
      resolve({
        cachedViews: [...this.cachedViews]
      })
    })
  }

  @Action
  public updateVisitedView(view: ITagView) {
    this.UPDATE_VISITED_VIEW(view)
  }
}

export const TagsViewModule = getModule(TagsView)
