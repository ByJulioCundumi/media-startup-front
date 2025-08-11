import type { ICategories } from "./ICategory";
import type { IGenderFilter } from "./IGenderFilter";
import type { ILanguage } from "./ILanguage";
import type { INavbar } from "./INavbar";
import type { ISidebar } from "./ISidebar";

export interface IState{
    sidebar: ISidebar,
    language: ILanguage,
    navbar: INavbar,
    categories: ICategories,
    genderFilter: IGenderFilter
}