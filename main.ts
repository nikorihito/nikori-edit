let pos1: Position = null
let pos2: Position = null

player.onChat("pos1", function () {
    pos1 = player.position()
    player.say("位置1を設定しました: " + pos1)
})

player.onChat("pos2", function () {
    pos2 = player.position()
    player.say("位置2を設定しました: " + pos2)
})

player.onChat("fill", function (blockName: string) {
    if (pos1 && pos2) {
        blocks.fill(
            blockName,
            pos1,
            pos2,
            FillOperation.Replace
        )
        player.say("範囲にブロックを設置しました！")
    } else {
        player.say("pos1とpos2を設定してください")
    }
})
