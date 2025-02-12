"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeedService = void 0;
const common_1 = require("@nestjs/common");
const writers_service_1 = require("../writers/writers.service");
const writers_json_1 = __importDefault(require("./writers.json"));
const posts_json_1 = __importDefault(require("./posts.json"));
const posts_service_1 = require("../posts/posts.service");
let SeedService = class SeedService {
    constructor(writersService, postsService) {
        this.writersService = writersService;
        this.postsService = postsService;
    }
    async seedData() {
        const writersCount = await this.writersService.count();
        const postsCount = await this.postsService.count();
        try {
            if (writersCount == 0) {
                writers_json_1.default.forEach((element) => {
                    this.writersService.create(element);
                });
            }
            else {
                console.log('No need for writers seed.');
            }
            if (postsCount == 0) {
                posts_json_1.default.forEach((element) => {
                    const elementObj = {
                        ...element,
                        createdAt: new Date(element.createdAt),
                    };
                    this.postsService.create(elementObj);
                });
            }
            else {
                console.log('No need for posts seed.');
            }
        }
        catch (error) {
            console.log(`An error has Occured while seeding data to the Data Base, please check seeder.service.ts file.\n Error:\n ${error}`);
        }
    }
};
exports.SeedService = SeedService;
exports.SeedService = SeedService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [writers_service_1.WritersService,
        posts_service_1.PostsService])
], SeedService);
//# sourceMappingURL=seeder.service.js.map