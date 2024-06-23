import { v4 as uuid } from "uuid";

export const cleanAndTransformBlocks = (blocksJSON) => {
    let blocks;
    try {
        blocks = JSON.parse(blocksJSON);
        if (!blocks) {
            throw new Error("Parsed JSON is undefined");
        }
    } catch (error) {
        console.error("Custom error parsing JSON (null if blocks is undefined):", error);
        return null; // Or handle the error appropriately
    }

    const deleteKeys = [
        'attributesType',
        'blockType',
        // 'dynamicContent',
        // 'originalContent',
        'saveContent',
        'postId',
        'get_parent',
        'order',
    ]

    const removeUnusedDataAndAssignId = (b) => {
        b.forEach(block => {
            block.id = uuid();
            deleteKeys.forEach((deleteKey) => {
                delete block[deleteKey];
            });
            if (block.originalContent) {
                //remove html p tags from originalContent to prevent repeat in code
                const inputString = block.originalContent
                const regex = /<\/?(p|h[1-6])([^>]*)>/g;
                block.originalContent = inputString.replace(regex, '');
                
            } 
             if (block.innerBlocks?.length) {
                removeUnusedDataAndAssignId(block.innerBlocks);
                
            } 
            
            else {
                delete block.innerBlocks;
            }
        })
    }

    removeUnusedDataAndAssignId(blocks);
    return blocks;
}