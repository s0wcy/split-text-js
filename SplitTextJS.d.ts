interface Result {
    words: NodeListOf<Element>;
    chars: NodeListOf<Element>;
    spaces: NodeListOf<Element>;
    splitted: Element;
    originalText: string;
}
interface TSplitTextJS {
    new (target: Element): Result;
}
declare const SplitTextJS: TSplitTextJS;
export default SplitTextJS;
