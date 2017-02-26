"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * traverses over the read quicksiteFile and creates menuData
 */
exports.buildMenu = (quicksiteFilesArg) => __awaiter(this, void 0, void 0, function* () {
    let menuItems = [];
    for (let quicksiteFile of quicksiteFilesArg) {
        menuItems.push({
            name: quicksiteFile.filePath.replace(/.html/, ''),
            link: quicksiteFile.filePath
        });
    }
    for (let quicksiteFile of quicksiteFilesArg) {
        quicksiteFile.menuItems = menuItems;
    }
    return quicksiteFilesArg;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVpY2tzaXRlLm1lbnUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9xdWlja3NpdGUubWVudS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBUUE7O0dBRUc7QUFDUSxRQUFBLFNBQVMsR0FBRyxDQUFPLGlCQUFtQztJQUMvRCxJQUFJLFNBQVMsR0FBZ0IsRUFBRSxDQUFBO0lBQy9CLEdBQUcsQ0FBQyxDQUFDLElBQUksYUFBYSxJQUFJLGlCQUFpQixDQUFDLENBQUMsQ0FBQztRQUM1QyxTQUFTLENBQUMsSUFBSSxDQUFDO1lBQ2IsSUFBSSxFQUFFLGFBQWEsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUM7WUFDakQsSUFBSSxFQUFFLGFBQWEsQ0FBQyxRQUFRO1NBQzdCLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFDRCxHQUFHLENBQUMsQ0FBQyxJQUFJLGFBQWEsSUFBSSxpQkFBaUIsQ0FBQyxDQUFDLENBQUM7UUFDNUMsYUFBYSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUE7SUFDckMsQ0FBQztJQUNELE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQTtBQUMxQixDQUFDLENBQUEsQ0FBQSJ9