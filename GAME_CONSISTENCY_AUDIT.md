# Rà soát đồng nhất game WeWin

> Tạo lúc: 2026-06-19 03:15:58
> Nguồn: API `http://localhost:5222/api/game/all` + kiểm tra file `frontend/public/assets/images`

## Tổng quan

| Chỉ số | Giá trị |
| --- | --- |
| Tổ hợp unit × level × week × game đã quét | 216 |
| Tổ hợp có ít nhất 1 câu hỏi | 213 |
| **Lệch số câu giữa 3 game** | **106** |
| Ảnh thiếu file local (unique) | 184 |
| Ảnh chỉ có URL remote (chưa tải local) | 0 |
| File ảnh trong `frontend/public/assets/images` | 588 |

## Lệch số câu (ListenChoose vs LookChoose vs Pronunciation)

**106 tổ hợp** có số câu khác nhau giữa 3 game.

| Game | Unit | Level | Week | Listen | Look | Pron | Chỉ có ở Pron | Chỉ có ở Look | Chỉ có ở Listen |
| --- | --- | --- | --- | ---: | ---: | ---: | --- | --- | --- |
| starters | UNIT 1 | pre11 | 1 | 10 | 12 | 11 | — | hall | — |
| starters | UNIT 1 | pre11 | 2 | 6 | 4 | 0 | — | bedroom, dining room, bathroom, kitchen | living room, hall |
| starters | UNIT 1 | pre12 | 1 | 10 | 12 | 11 | — | hall | — |
| starters | UNIT 1 | pre12 | 2 | 6 | 4 | 0 | — | kitchen, bedroom, bathroom, dining room | living room, hall |
| starters | UNIT 1 | pre2 | 1 | 10 | 12 | 1 | — | mouse, cow, frog, television, sheep… | — |
| starters | UNIT 1 | pre2 | 2 | 6 | 4 | 4 | — | — | hall, living room |
| starters | UNIT 1 | pre3 | 1 | 10 | 12 | 1 | — | fish, goat, duck, mouse, bird… | — |
| starters | UNIT 1 | pre3 | 2 | 6 | 4 | 4 | — | — | hall, living room |
| starters | UNIT 10 | pre11 | 2 | 18 | 16 | 16 | — | — | bed, have bath |
| starters | UNIT 10 | pre12 | 2 | 18 | 16 | 16 | — | — | have bath, bed |
| starters | UNIT 10 | pre2 | 1 | 18 | 17 | 17 | — | — | bed |
| starters | UNIT 10 | pre2 | 2 | 18 | 16 | 16 | — | — | bed, have bath |
| starters | UNIT 10 | pre3 | 1 | 18 | 17 | 17 | — | — | bed |
| starters | UNIT 10 | pre3 | 2 | 18 | 16 | 16 | — | — | bed, have bath |
| starters | UNIT 11 | pre11 | 1 | 9 | 7 | 7 | — | — | motorbike, plane |
| starters | UNIT 11 | pre11 | 2 | 0 | 1 | 1 | — | — | — |
| starters | UNIT 11 | pre12 | 1 | 9 | 7 | 7 | — | — | motorbike, plane |
| starters | UNIT 11 | pre12 | 2 | 0 | 1 | 1 | — | — | — |
| starters | UNIT 11 | pre2 | 1 | 0 | 1 | 1 | — | — | — |
| starters | UNIT 11 | pre3 | 1 | 0 | 1 | 1 | — | — | — |
| starters | UNIT 12 | pre11 | 1 | 15 | 16 | 16 | — | — | — |
| starters | UNIT 12 | pre11 | 2 | 0 | 1 | 1 | — | — | — |
| starters | UNIT 12 | pre12 | 1 | 12 | 13 | 13 | — | — | — |
| starters | UNIT 12 | pre12 | 2 | 12 | 11 | 11 | — | — | fruit |
| starters | UNIT 12 | pre2 | 2 | 13 | 11 | 11 | — | — | boat, fruit |
| starters | UNIT 12 | pre3 | 2 | 13 | 11 | 11 | — | — | fruit, boat |
| starters | UNIT 13 | pre11 | 1 | 11 | 10 | 10 | — | — | elephant, polar bear |
| starters | UNIT 13 | pre11 | 2 | 0 | 1 | 1 | — | — | — |
| starters | UNIT 13 | pre12 | 1 | 11 | 10 | 10 | — | — | elephant, polar bear |
| starters | UNIT 13 | pre12 | 2 | 0 | 1 | 1 | — | — | — |
| starters | UNIT 13 | pre2 | 1 | 0 | 1 | 1 | — | — | — |
| starters | UNIT 13 | pre2 | 2 | 9 | 8 | 8 | — | — | bread |
| starters | UNIT 13 | pre3 | 1 | 0 | 1 | 1 | — | — | — |
| starters | UNIT 13 | pre3 | 2 | 9 | 8 | 8 | — | — | bread |
| starters | UNIT 14 | pre11 | 1 | 15 | 14 | 14 | — | — | lemonade, camera |
| starters | UNIT 14 | pre11 | 2 | 0 | 1 | 1 | — | — | — |
| starters | UNIT 14 | pre12 | 1 | 15 | 14 | 14 | — | — | lemonade, camera |
| starters | UNIT 14 | pre12 | 2 | 0 | 1 | 1 | — | — | — |
| starters | UNIT 14 | pre2 | 1 | 0 | 1 | 1 | — | — | — |
| starters | UNIT 14 | pre2 | 2 | 12 | 11 | 11 | — | — | tennis racket |
| starters | UNIT 14 | pre3 | 1 | 0 | 1 | 1 | — | — | — |
| starters | UNIT 14 | pre3 | 2 | 12 | 11 | 11 | — | — | tennis racket |
| starters | UNIT 15 | pre11 | 1 | 17 | 15 | 15 | — | — | listen to, sea |
| starters | UNIT 15 | pre11 | 2 | 0 | 1 | 1 | — | — | — |
| starters | UNIT 15 | pre12 | 1 | 17 | 15 | 15 | — | — | sea, listen to |
| starters | UNIT 15 | pre12 | 2 | 0 | 1 | 1 | — | — | — |
| starters | UNIT 15 | pre2 | 2 | 6 | 5 | 5 | — | — | lorry |
| starters | UNIT 15 | pre3 | 2 | 6 | 5 | 5 | — | — | lorry |
| starters | UNIT 2 | pre11 | 1 | 12 | 12 | 10 | — | mirror | picture, television |
| starters | UNIT 2 | pre11 | 2 | 20 | 20 | 1 | — | chair, bedroom, bathroom, table, cupboard… | — |
| starters | UNIT 2 | pre12 | 1 | 12 | 12 | 10 | — | mirror | television, picture |
| starters | UNIT 2 | pre12 | 2 | 20 | 20 | 1 | — | mirror, bathroom, cupboard, cow, bed… | — |
| starters | UNIT 2 | pre2 | 1 | 12 | 12 | 2 | — | grandpa, sofa, door, bookcase, wall… | picture, television |
| starters | UNIT 2 | pre3 | 1 | 12 | 12 | 2 | — | wall, door, sofa, armchair, window… | television, picture |
| starters | UNIT 3 | pre11 | 1 | 8 | 7 | 7 | — | — | grandpa, cousin |
| starters | UNIT 3 | pre11 | 2 | 0 | 2 | 2 | — | — | — |
| starters | UNIT 3 | pre12 | 1 | 8 | 7 | 7 | — | — | cousin, grandpa |
| starters | UNIT 3 | pre12 | 2 | 0 | 2 | 2 | — | — | — |
| starters | UNIT 3 | pre2 | 1 | 8 | 7 | 1 | — | brother, baby, dad, grandma, sister… | grandpa, cousin |
| starters | UNIT 3 | pre2 | 2 | 8 | 9 | 8 | — | cousin | — |
| starters | UNIT 3 | pre3 | 1 | 8 | 8 | 2 | — | dad, grandma, sister, baby, brother… | grandpa, cousin |
| starters | UNIT 3 | pre3 | 2 | 8 | 10 | 9 | — | cousin | — |
| starters | UNIT 4 | pre11 | 1 | 13 | 12 | 12 | — | — | lemon, favourite |
| starters | UNIT 4 | pre11 | 2 | 13 | 12 | 12 | — | — | lemon |
| starters | UNIT 4 | pre12 | 1 | 13 | 12 | 12 | — | — | favourite, lemon |
| starters | UNIT 4 | pre12 | 2 | 13 | 12 | 12 | — | — | lemon |
| starters | UNIT 4 | pre2 | 1 | 0 | 1 | 1 | — | — | — |
| starters | UNIT 4 | pre2 | 2 | 9 | 8 | 8 | — | — | fruit |
| starters | UNIT 4 | pre3 | 1 | 13 | 12 | 12 | — | — | lemon, favourite |
| starters | UNIT 4 | pre3 | 2 | 22 | 20 | 20 | — | — | fruit, lemon |
| starters | UNIT 5 | pre11 | 1 | 9 | 8 | 8 | — | — | hat, trousers |
| starters | UNIT 5 | pre11 | 2 | 0 | 1 | 1 | — | — | — |
| starters | UNIT 5 | pre12 | 1 | 9 | 8 | 8 | — | — | trousers, hat |
| starters | UNIT 5 | pre12 | 2 | 0 | 1 | 1 | — | — | — |
| starters | UNIT 5 | pre2 | 1 | 0 | 1 | 1 | — | — | — |
| starters | UNIT 5 | pre2 | 2 | 9 | 8 | 8 | — | — | clothes |
| starters | UNIT 5 | pre3 | 1 | 0 | 1 | 1 | — | — | — |
| starters | UNIT 5 | pre3 | 2 | 9 | 8 | 8 | — | — | clothes |
| starters | UNIT 6 | pre11 | 1 | 14 | 13 | 13 | — | — | feet, body |
| starters | UNIT 6 | pre11 | 2 | 0 | 1 | 1 | — | — | — |
| starters | UNIT 6 | pre12 | 1 | 14 | 13 | 13 | — | — | feet, body |
| starters | UNIT 6 | pre12 | 2 | 0 | 1 | 1 | — | — | — |
| starters | UNIT 6 | pre2 | 1 | 0 | 1 | 1 | — | — | — |
| starters | UNIT 6 | pre2 | 2 | 9 | 8 | 8 | — | — | frog |
| starters | UNIT 6 | pre3 | 1 | 0 | 1 | 1 | — | — | — |
| starters | UNIT 6 | pre3 | 2 | 9 | 8 | 8 | — | — | frog |
| starters | UNIT 7 | pre11 | 1 | 10 | 9 | 9 | — | — | crayon, book |
| starters | UNIT 7 | pre11 | 2 | 0 | 1 | 1 | — | — | — |
| starters | UNIT 7 | pre12 | 1 | 10 | 8 | 8 | — | — | book, crayon |
| starters | UNIT 7 | pre12 | 2 | 0 | 1 | 1 | — | — | — |
| starters | UNIT 7 | pre2 | 1 | 0 | 1 | 1 | — | — | — |
| starters | UNIT 7 | pre2 | 2 | 8 | 7 | 7 | — | — | cupboard |
| starters | UNIT 7 | pre3 | 1 | 0 | 1 | 1 | — | — | — |
| starters | UNIT 7 | pre3 | 2 | 8 | 7 | 7 | — | — | cupboard |
| starters | UNIT 8 | pre12 | 2 | 0 | 1 | 1 | — | — | — |
| starters | UNIT 8 | pre2 | 1 | 0 | 1 | 1 | — | — | — |
| starters | UNIT 8 | pre2 | 2 | 8 | 7 | 7 | — | — | fly a kite |
| starters | UNIT 8 | pre3 | 1 | 0 | 1 | 1 | — | — | — |
| starters | UNIT 8 | pre3 | 2 | 8 | 7 | 7 | — | — | fly a kite |
| starters | UNIT 9 | pre11 | 2 | 0 | 1 | 1 | — | — | — |
| starters | UNIT 9 | pre12 | 1 | 8 | 7 | 7 | — | — | stories, board games |
| starters | UNIT 9 | pre12 | 2 | 0 | 2 | 2 | — | — | — |
| starters | UNIT 9 | pre2 | 1 | 0 | 2 | 2 | — | — | — |
| starters | UNIT 9 | pre2 | 2 | 9 | 10 | 10 | — | — | — |
| starters | UNIT 9 | pre3 | 1 | 0 | 2 | 2 | — | — | — |
| starters | UNIT 9 | pre3 | 2 | 9 | 10 | 10 | — | — | — |

## Ảnh thiếu file local (unique theo từ + path)

**184 ảnh** không tìm thấy file local (thường do tên `ox` thay vì `ox zodiac`).

| Từ | URL kỳ vọng | File kỳ vọng |
| --- | --- | --- |
| Africa | `/assets/images/Africa.jpg` | `frontend\public\assets\images\Africa.jpg` |
| Africa | `/assets/images/Cloud.jpg` | `frontend\public\assets\images\Cloud.jpg` |
| Africa | `/assets/images/Antarctica.jpg` | `frontend\public\assets\images\Antarctica.jpg` |
| Africa | `/assets/images/Asia.jpg` | `frontend\public\assets\images\Asia.jpg` |
| Africa | `/assets/images/Europe.jpg` | `frontend\public\assets\images\Europe.jpg` |
| America | `/assets/images/Asia.jpg` | `frontend\public\assets\images\Asia.jpg` |
| America | `/assets/images/Africa.jpg` | `frontend\public\assets\images\Africa.jpg` |
| America | `/assets/images/Europe.jpg` | `frontend\public\assets\images\Europe.jpg` |
| America | `/assets/images/Dog.jpg` | `frontend\public\assets\images\Dog.jpg` |
| Ant | `/assets/images/Full%20Caterpillar.jpg` | `frontend\public\assets\images\Full Caterpillar.jpg` |
| Antarctica | `/assets/images/Antarctica.jpg` | `frontend\public\assets\images\Antarctica.jpg` |
| Antarctica | `/assets/images/North%20America.jpg` | `frontend\public\assets\images\North America.jpg` |
| Antarctica | `/assets/images/Asia.jpg` | `frontend\public\assets\images\Asia.jpg` |
| Antarctica | `/assets/images/Europe.jpg` | `frontend\public\assets\images\Europe.jpg` |
| Antarctica | `/assets/images/Africa.jpg` | `frontend\public\assets\images\Africa.jpg` |
| Apartment | `/assets/images/Apartment.jpg` | `frontend\public\assets\images\Apartment.jpg` |
| Asia | `/assets/images/Asia.jpg` | `frontend\public\assets\images\Asia.jpg` |
| Asia | `/assets/images/Africa.jpg` | `frontend\public\assets\images\Africa.jpg` |
| Asia | `/assets/images/North%20America.jpg` | `frontend\public\assets\images\North America.jpg` |
| Asia | `/assets/images/Europe.jpg` | `frontend\public\assets\images\Europe.jpg` |
| Asia | `/assets/images/Antarctica.jpg` | `frontend\public\assets\images\Antarctica.jpg` |
| Australia | `/assets/images/Antarctica.jpg` | `frontend\public\assets\images\Antarctica.jpg` |
| Australia | `/assets/images/Africa.jpg` | `frontend\public\assets\images\Africa.jpg` |
| Australia | `/assets/images/Europe.jpg` | `frontend\public\assets\images\Europe.jpg` |
| Barn | `/assets/images/Barn.jpg` | `frontend\public\assets\images\Barn.jpg` |
| beach | `/assets/images/Europe.jpg` | `frontend\public\assets\images\Europe.jpg` |
| bedroom | `/assets/images/Europe.jpg` | `frontend\public\assets\images\Europe.jpg` |
| Bell | `/assets/images/Bell.jpg` | `frontend\public\assets\images\Bell.jpg` |
| boat | `/assets/images/North%20America.jpg` | `frontend\public\assets\images\North America.jpg` |
| Cambodia | `/assets/images/Asia.jpg` | `frontend\public\assets\images\Asia.jpg` |
| Cambodia | `/assets/images/Europe.jpg` | `frontend\public\assets\images\Europe.jpg` |
| Canada | `/assets/images/Africa.jpg` | `frontend\public\assets\images\Africa.jpg` |
| Canada | `/assets/images/Antarctica.jpg` | `frontend\public\assets\images\Antarctica.jpg` |
| Canada | `/assets/images/Bell.jpg` | `frontend\public\assets\images\Bell.jpg` |
| carrot | `/assets/images/Asia.jpg` | `frontend\public\assets\images\Asia.jpg` |
| Cat | `/assets/images/Cat.jpg` | `frontend\public\assets\images\Cat.jpg` |
| Cat | `/assets/images/Make%20A%20Wish.jpg` | `frontend\public\assets\images\Make A Wish.jpg` |
| Caterpillar | `/assets/images/Caterpillar.jpg` | `frontend\public\assets\images\Caterpillar.jpg` |
| China | `/assets/images/North%20America.jpg` | `frontend\public\assets\images\North America.jpg` |
| China | `/assets/images/Asia.jpg` | `frontend\public\assets\images\Asia.jpg` |
| China | `/assets/images/Wet.jpg` | `frontend\public\assets\images\Wet.jpg` |
| China | `/assets/images/Cloud.jpg` | `frontend\public\assets\images\Cloud.jpg` |
| China | `/assets/images/Africa.jpg` | `frontend\public\assets\images\Africa.jpg` |
| China | `/assets/images/Europe.jpg` | `frontend\public\assets\images\Europe.jpg` |
| China | `/assets/images/South%20America.jpg` | `frontend\public\assets\images\South America.jpg` |
| Cloud | `/assets/images/Cloud.jpg` | `frontend\public\assets\images\Cloud.jpg` |
| Cloudy | `/assets/images/Asia.jpg` | `frontend\public\assets\images\Asia.jpg` |
| Coop | `/assets/images/Coop.jpg` | `frontend\public\assets\images\Coop.jpg` |
| Coop | `/assets/images/Pasture.jpg` | `frontend\public\assets\images\Pasture.jpg` |
| cow | `/assets/images/Coop.jpg` | `frontend\public\assets\images\Coop.jpg` |
| Decorate The House | `/assets/images/Decorate%20The%20House.jpg` | `frontend\public\assets\images\Decorate The House.jpg` |
| Dog | `/assets/images/Dog.jpg` | `frontend\public\assets\images\Dog.jpg` |
| Dolphin | `/assets/images/Sailing.jpg` | `frontend\public\assets\images\Sailing.jpg` |
| Donkey | `/assets/images/Trough.jpg` | `frontend\public\assets\images\Trough.jpg` |
| Dragon | `/assets/images/Dragon.jpg` | `frontend\public\assets\images\Dragon.jpg` |
| Dragonfly | `/assets/images/Full%20Caterpillar.jpg` | `frontend\public\assets\images\Full Caterpillar.jpg` |
| dress | `/assets/images/Asia.jpg` | `frontend\public\assets\images\Asia.jpg` |
| duck | `/assets/images/Europe.jpg` | `frontend\public\assets\images\Europe.jpg` |
| ear | `/assets/images/Africa.jpg` | `frontend\public\assets\images\Africa.jpg` |
| earth | `/assets/images/Asia.jpg` | `frontend\public\assets\images\Asia.jpg` |
| eat | `/assets/images/Africa.jpg` | `frontend\public\assets\images\Africa.jpg` |
| England | `/assets/images/Asia.jpg` | `frontend\public\assets\images\Asia.jpg` |
| England | `/assets/images/Sand%20Castle.jpg` | `frontend\public\assets\images\Sand Castle.jpg` |
| England | `/assets/images/Africa.jpg` | `frontend\public\assets\images\Africa.jpg` |
| England | `/assets/images/Europe.jpg` | `frontend\public\assets\images\Europe.jpg` |
| England | `/assets/images/Garage.jpg` | `frontend\public\assets\images\Garage.jpg` |
| Eraser | `/assets/images/Notebook.jpg` | `frontend\public\assets\images\Notebook.jpg` |
| Europe | `/assets/images/Europe.jpg` | `frontend\public\assets\images\Europe.jpg` |
| Europe | `/assets/images/Asia.jpg` | `frontend\public\assets\images\Asia.jpg` |
| Europe | `/assets/images/South%20America.jpg` | `frontend\public\assets\images\South America.jpg` |
| Europe | `/assets/images/Africa.jpg` | `frontend\public\assets\images\Africa.jpg` |
| Europe | `/assets/images/North%20America.jpg` | `frontend\public\assets\images\North America.jpg` |
| farmer | `/assets/images/Stable.jpg` | `frontend\public\assets\images\Stable.jpg` |
| Feed | `/assets/images/Feed.jpg` | `frontend\public\assets\images\Feed.jpg` |
| Fence | `/assets/images/Fence.jpg` | `frontend\public\assets\images\Fence.jpg` |
| Flock | `/assets/images/Flock.jpg` | `frontend\public\assets\images\Flock.jpg` |
| Flock | `/assets/images/Herd.jpg` | `frontend\public\assets\images\Herd.jpg` |
| flower | `/assets/images/Africa.jpg` | `frontend\public\assets\images\Africa.jpg` |
| Fly | `/assets/images/Asia.jpg` | `frontend\public\assets\images\Asia.jpg` |
| France | `/assets/images/Europe.jpg` | `frontend\public\assets\images\Europe.jpg` |
| Full Caterpillar | `/assets/images/Full%20Caterpillar.jpg` | `frontend\public\assets\images\Full Caterpillar.jpg` |
| Garage | `/assets/images/Garage.jpg` | `frontend\public\assets\images\Garage.jpg` |
| Germany | `/assets/images/Europe.jpg` | `frontend\public\assets\images\Europe.jpg` |
| gift | `/assets/images/Asia.jpg` | `frontend\public\assets\images\Asia.jpg` |
| glass | `/assets/images/Antarctica.jpg` | `frontend\public\assets\images\Antarctica.jpg` |
| goat | `/assets/images/Rat.jpg` | `frontend\public\assets\images\Rat.jpg` |
| happy | `/assets/images/Asia.jpg` | `frontend\public\assets\images\Asia.jpg` |
| hat | `/assets/images/Antarctica.jpg` | `frontend\public\assets\images\Antarctica.jpg` |
| hear | `/assets/images/Asia.jpg` | `frontend\public\assets\images\Asia.jpg` |
| Hen | `/assets/images/Hen.jpg` | `frontend\public\assets\images\Hen.jpg` |
| Herd | `/assets/images/Herd.jpg` | `frontend\public\assets\images\Herd.jpg` |
| Herd | `/assets/images/Feed.jpg` | `frontend\public\assets\images\Feed.jpg` |
| horse | `/assets/images/Africa.jpg` | `frontend\public\assets\images\Africa.jpg` |
| hot | `/assets/images/Africa.jpg` | `frontend\public\assets\images\Africa.jpg` |
| hungry | `/assets/images/Surprised.jpg` | `frontend\public\assets\images\Surprised.jpg` |
| India | `/assets/images/North%20America.jpg` | `frontend\public\assets\images\North America.jpg` |
| India | `/assets/images/Asia.jpg` | `frontend\public\assets\images\Asia.jpg` |
| Island | `/assets/images/Europe.jpg` | `frontend\public\assets\images\Europe.jpg` |
| Italy | `/assets/images/Asia.jpg` | `frontend\public\assets\images\Asia.jpg` |
| Italy | `/assets/images/Apartment.jpg` | `frontend\public\assets\images\Apartment.jpg` |
| Japan | `/assets/images/Asia.jpg` | `frontend\public\assets\images\Asia.jpg` |
| Japan | `/assets/images/Antarctica.jpg` | `frontend\public\assets\images\Antarctica.jpg` |
| Japan | `/assets/images/Europe.jpg` | `frontend\public\assets\images\Europe.jpg` |
| Japan | `/assets/images/Africa.jpg` | `frontend\public\assets\images\Africa.jpg` |
| Japan | `/assets/images/Bell.jpg` | `frontend\public\assets\images\Bell.jpg` |
| Korea | `/assets/images/Europe.jpg` | `frontend\public\assets\images\Europe.jpg` |
| Korea | `/assets/images/Africa.jpg` | `frontend\public\assets\images\Africa.jpg` |
| Korea | `/assets/images/Asia.jpg` | `frontend\public\assets\images\Asia.jpg` |
| Korea | `/assets/images/South%20America.jpg` | `frontend\public\assets\images\South America.jpg` |
| Korea | `/assets/images/North%20America.jpg` | `frontend\public\assets\images\North America.jpg` |
| labybug | `/assets/images/Asia.jpg` | `frontend\public\assets\images\Asia.jpg` |
| Lamb | `/assets/images/Sow.jpg` | `frontend\public\assets\images\Sow.jpg` |
| lamp | `/assets/images/Africa.jpg` | `frontend\public\assets\images\Africa.jpg` |
| leaves | `/assets/images/Antarctica.jpg` | `frontend\public\assets\images\Antarctica.jpg` |
| living room | `/assets/images/North%20America.jpg` | `frontend\public\assets\images\North America.jpg` |
| Make A Wish | `/assets/images/Make%20A%20Wish.jpg` | `frontend\public\assets\images\Make A Wish.jpg` |
| mango | `/assets/images/Europe.jpg` | `frontend\public\assets\images\Europe.jpg` |
| Mexico | `/assets/images/Asia.jpg` | `frontend\public\assets\images\Asia.jpg` |
| monkey | `/assets/images/Asia.jpg` | `frontend\public\assets\images\Asia.jpg` |
| moon | `/assets/images/South%20America.jpg` | `frontend\public\assets\images\South America.jpg` |
| Mountain | `/assets/images/Africa.jpg` | `frontend\public\assets\images\Africa.jpg` |
| North America | `/assets/images/North%20America.jpg` | `frontend\public\assets\images\North America.jpg` |
| North America | `/assets/images/Africa.jpg` | `frontend\public\assets\images\Africa.jpg` |
| nose | `/assets/images/Europe.jpg` | `frontend\public\assets\images\Europe.jpg` |
| nose | `/assets/images/Africa.jpg` | `frontend\public\assets\images\Africa.jpg` |
| Notebook | `/assets/images/Notebook.jpg` | `frontend\public\assets\images\Notebook.jpg` |
| octopus | `/assets/images/Sailing.jpg` | `frontend\public\assets\images\Sailing.jpg` |
| Ox | `/assets/images/Ox.jpg` | `frontend\public\assets\images\Ox.jpg` |
| Party Hat | `/assets/images/Asia.jpg` | `frontend\public\assets\images\Asia.jpg` |
| Pasture | `/assets/images/Pasture.jpg` | `frontend\public\assets\images\Pasture.jpg` |
| Pasture | `/assets/images/Stable.jpg` | `frontend\public\assets\images\Stable.jpg` |
| pig | `/assets/images/Asia.jpg` | `frontend\public\assets\images\Asia.jpg` |
| pig | `/assets/images/Herd.jpg` | `frontend\public\assets\images\Herd.jpg` |
| pig | `/assets/images/Fence.jpg` | `frontend\public\assets\images\Fence.jpg` |
| pig | `/assets/images/Cat.jpg` | `frontend\public\assets\images\Cat.jpg` |
| Plastic | `/assets/images/Asia.jpg` | `frontend\public\assets\images\Asia.jpg` |
| Pony | `/assets/images/Sow.jpg` | `frontend\public\assets\images\Sow.jpg` |
| Rat | `/assets/images/Rat.jpg` | `frontend\public\assets\images\Rat.jpg` |
| Rat | `/assets/images/Decorate%20The%20House.jpg` | `frontend\public\assets\images\Decorate The House.jpg` |
| ruler | `/assets/images/Asia.jpg` | `frontend\public\assets\images\Asia.jpg` |
| Russia | `/assets/images/Asia.jpg` | `frontend\public\assets\images\Asia.jpg` |
| Russia | `/assets/images/Antarctica.jpg` | `frontend\public\assets\images\Antarctica.jpg` |
| Russia | `/assets/images/North%20America.jpg` | `frontend\public\assets\images\North America.jpg` |
| Russia | `/assets/images/Europe.jpg` | `frontend\public\assets\images\Europe.jpg` |
| Sailing | `/assets/images/Sailing.jpg` | `frontend\public\assets\images\Sailing.jpg` |
| Sand Castle | `/assets/images/Sand%20Castle.jpg` | `frontend\public\assets\images\Sand Castle.jpg` |
| santa claus | `/assets/images/Asia.jpg` | `frontend\public\assets\images\Asia.jpg` |
| Scared | `/assets/images/Europe.jpg` | `frontend\public\assets\images\Europe.jpg` |
| sea-lion | `/assets/images/Asia.jpg` | `frontend\public\assets\images\Asia.jpg` |
| sea-lion | `/assets/images/Sailing.jpg` | `frontend\public\assets\images\Sailing.jpg` |
| sheep | `/assets/images/Barn.jpg` | `frontend\public\assets\images\Barn.jpg` |
| silly | `/assets/images/Surprised.jpg` | `frontend\public\assets\images\Surprised.jpg` |
| sister | `/assets/images/Europe.jpg` | `frontend\public\assets\images\Europe.jpg` |
| Sky | `/assets/images/Africa.jpg` | `frontend\public\assets\images\Africa.jpg` |
| Sky | `/assets/images/North%20America.jpg` | `frontend\public\assets\images\North America.jpg` |
| snake | `/assets/images/Dragon.jpg` | `frontend\public\assets\images\Dragon.jpg` |
| snake | `/assets/images/Dog.jpg` | `frontend\public\assets\images\Dog.jpg` |
| South America | `/assets/images/South%20America.jpg` | `frontend\public\assets\images\South America.jpg` |
| South America | `/assets/images/Asia.jpg` | `frontend\public\assets\images\Asia.jpg` |
| South America | `/assets/images/Europe.jpg` | `frontend\public\assets\images\Europe.jpg` |
| Sow | `/assets/images/Sow.jpg` | `frontend\public\assets\images\Sow.jpg` |
| Stable | `/assets/images/Stable.jpg` | `frontend\public\assets\images\Stable.jpg` |
| Strawberry | `/assets/images/Full%20Caterpillar.jpg` | `frontend\public\assets\images\Full Caterpillar.jpg` |
| sun | `/assets/images/Caterpillar.jpg` | `frontend\public\assets\images\Caterpillar.jpg` |
| sunny | `/assets/images/South%20America.jpg` | `frontend\public\assets\images\South America.jpg` |
| sunny | `/assets/images/Asia.jpg` | `frontend\public\assets\images\Asia.jpg` |
| surfing | `/assets/images/Africa.jpg` | `frontend\public\assets\images\Africa.jpg` |
| Surprised | `/assets/images/Surprised.jpg` | `frontend\public\assets\images\Surprised.jpg` |
| taste | `/assets/images/Europe.jpg` | `frontend\public\assets\images\Europe.jpg` |
| Trough | `/assets/images/Trough.jpg` | `frontend\public\assets\images\Trough.jpg` |
| Trough | `/assets/images/Flock.jpg` | `frontend\public\assets\images\Flock.jpg` |
| Turkey | `/assets/images/Coop.jpg` | `frontend\public\assets\images\Coop.jpg` |
| Vietnam | `/assets/images/South%20America.jpg` | `frontend\public\assets\images\South America.jpg` |
| Vietnam | `/assets/images/Asia.jpg` | `frontend\public\assets\images\Asia.jpg` |
| Vietnam | `/assets/images/Antarctica.jpg` | `frontend\public\assets\images\Antarctica.jpg` |
| Vietnam | `/assets/images/Africa.jpg` | `frontend\public\assets\images\Africa.jpg` |
| Vietnam | `/assets/images/Europe.jpg` | `frontend\public\assets\images\Europe.jpg` |
| Vietnam | `/assets/images/Garage.jpg` | `frontend\public\assets\images\Garage.jpg` |
| Vietnam | `/assets/images/Cat.jpg` | `frontend\public\assets\images\Cat.jpg` |
| Vietnam | `/assets/images/Ox.jpg` | `frontend\public\assets\images\Ox.jpg` |
| water | `/assets/images/Antarctica.jpg` | `frontend\public\assets\images\Antarctica.jpg` |
| Wet | `/assets/images/Wet.jpg` | `frontend\public\assets\images\Wet.jpg` |
| Wet | `/assets/images/Cloud.jpg` | `frontend\public\assets\images\Cloud.jpg` |
| Windsurfing | `/assets/images/Asia.jpg` | `frontend\public\assets\images\Asia.jpg` |

## Ảnh thiếu local — chi tiết theo unit (LookChoose / ListenChoose / Pronunciation)

**696 dòng**

| Game | Unit | Level | Week | Game type | Từ | URL |
| --- | --- | --- | --- | --- | --- | --- |
| kindergarten | UNIT 1. AROUND THE WORLD AND MY COUNTRY | pre11 | 1 | listenchoose | Africa | `/assets/images/Africa.jpg` |
| kindergarten | UNIT 1. AROUND THE WORLD AND MY COUNTRY | pre11 | 2 | listenchoose | Africa | `/assets/images/Africa.jpg` |
| kindergarten | UNIT 1. AROUND THE WORLD AND MY COUNTRY | pre12 | 1 | listenchoose | Africa | `/assets/images/Africa.jpg` |
| kindergarten | UNIT 1. AROUND THE WORLD AND MY COUNTRY | pre2 | 1 | listenchoose | Africa | `/assets/images/Africa.jpg` |
| kindergarten | UNIT 1. AROUND THE WORLD AND MY COUNTRY | pre11 | 1 | listenchoose | Antarctica | `/assets/images/Antarctica.jpg` |
| kindergarten | UNIT 1. AROUND THE WORLD AND MY COUNTRY | pre11 | 2 | listenchoose | Antarctica | `/assets/images/Antarctica.jpg` |
| kindergarten | UNIT 1. AROUND THE WORLD AND MY COUNTRY | pre11 | 2 | listenchoose | Antarctica | `/assets/images/North%20America.jpg` |
| kindergarten | UNIT 1. AROUND THE WORLD AND MY COUNTRY | pre12 | 1 | listenchoose | Antarctica | `/assets/images/Antarctica.jpg` |
| kindergarten | UNIT 1. AROUND THE WORLD AND MY COUNTRY | pre2 | 1 | listenchoose | Antarctica | `/assets/images/Antarctica.jpg` |
| kindergarten | UNIT 1. AROUND THE WORLD AND MY COUNTRY | pre2 | 1 | listenchoose | Antarctica | `/assets/images/Asia.jpg` |
| kindergarten | UNIT 1. AROUND THE WORLD AND MY COUNTRY | pre11 | 1 | listenchoose | Asia | `/assets/images/Asia.jpg` |
| kindergarten | UNIT 1. AROUND THE WORLD AND MY COUNTRY | pre11 | 2 | listenchoose | Asia | `/assets/images/Asia.jpg` |
| kindergarten | UNIT 1. AROUND THE WORLD AND MY COUNTRY | pre12 | 1 | listenchoose | Asia | `/assets/images/Asia.jpg` |
| kindergarten | UNIT 1. AROUND THE WORLD AND MY COUNTRY | pre12 | 2 | listenchoose | Asia | `/assets/images/Asia.jpg` |
| kindergarten | UNIT 1. AROUND THE WORLD AND MY COUNTRY | pre2 | 1 | listenchoose | Asia | `/assets/images/Asia.jpg` |
| kindergarten | UNIT 1. AROUND THE WORLD AND MY COUNTRY | pre3 | 1 | listenchoose | Asia | `/assets/images/Asia.jpg` |
| kindergarten | UNIT 1. AROUND THE WORLD AND MY COUNTRY | pre11 | 2 | listenchoose | Australia | `/assets/images/Antarctica.jpg` |
| kindergarten | UNIT 1. AROUND THE WORLD AND MY COUNTRY | pre2 | 1 | listenchoose | Australia | `/assets/images/Africa.jpg` |
| kindergarten | UNIT 1. AROUND THE WORLD AND MY COUNTRY | pre3 | 1 | listenchoose | Cambodia | `/assets/images/Asia.jpg` |
| kindergarten | UNIT 1. AROUND THE WORLD AND MY COUNTRY | pre3 | 1 | listenchoose | Cambodia | `/assets/images/Europe.jpg` |
| kindergarten | UNIT 1. AROUND THE WORLD AND MY COUNTRY | pre11 | 2 | listenchoose | China | `/assets/images/North%20America.jpg` |
| kindergarten | UNIT 1. AROUND THE WORLD AND MY COUNTRY | pre12 | 2 | listenchoose | China | `/assets/images/Asia.jpg` |
| kindergarten | UNIT 1. AROUND THE WORLD AND MY COUNTRY | pre11 | 1 | listenchoose | England | `/assets/images/Asia.jpg` |
| kindergarten | UNIT 1. AROUND THE WORLD AND MY COUNTRY | pre11 | 1 | listenchoose | Europe | `/assets/images/Europe.jpg` |
| kindergarten | UNIT 1. AROUND THE WORLD AND MY COUNTRY | pre11 | 1 | listenchoose | Europe | `/assets/images/Asia.jpg` |
| kindergarten | UNIT 1. AROUND THE WORLD AND MY COUNTRY | pre11 | 2 | listenchoose | Europe | `/assets/images/Europe.jpg` |
| kindergarten | UNIT 1. AROUND THE WORLD AND MY COUNTRY | pre12 | 1 | listenchoose | Europe | `/assets/images/Europe.jpg` |
| kindergarten | UNIT 1. AROUND THE WORLD AND MY COUNTRY | pre2 | 1 | listenchoose | Europe | `/assets/images/Europe.jpg` |
| kindergarten | UNIT 1. AROUND THE WORLD AND MY COUNTRY | pre3 | 1 | listenchoose | Europe | `/assets/images/Europe.jpg` |
| kindergarten | UNIT 1. AROUND THE WORLD AND MY COUNTRY | pre3 | 1 | listenchoose | Germany | `/assets/images/Europe.jpg` |
| kindergarten | UNIT 1. AROUND THE WORLD AND MY COUNTRY | pre2 | 1 | listenchoose | India | `/assets/images/North%20America.jpg` |
| kindergarten | UNIT 1. AROUND THE WORLD AND MY COUNTRY | pre11 | 2 | listenchoose | Japan | `/assets/images/Asia.jpg` |
| kindergarten | UNIT 1. AROUND THE WORLD AND MY COUNTRY | pre11 | 2 | listenchoose | Japan | `/assets/images/Antarctica.jpg` |
| kindergarten | UNIT 1. AROUND THE WORLD AND MY COUNTRY | pre12 | 1 | listenchoose | Japan | `/assets/images/Europe.jpg` |
| kindergarten | UNIT 1. AROUND THE WORLD AND MY COUNTRY | pre11 | 1 | listenchoose | Korea | `/assets/images/Europe.jpg` |
| kindergarten | UNIT 1. AROUND THE WORLD AND MY COUNTRY | pre2 | 1 | listenchoose | Korea | `/assets/images/Africa.jpg` |
| kindergarten | UNIT 1. AROUND THE WORLD AND MY COUNTRY | pre3 | 1 | listenchoose | Mexico | `/assets/images/Asia.jpg` |
| kindergarten | UNIT 1. AROUND THE WORLD AND MY COUNTRY | pre11 | 1 | listenchoose | North America | `/assets/images/North%20America.jpg` |
| kindergarten | UNIT 1. AROUND THE WORLD AND MY COUNTRY | pre11 | 2 | listenchoose | North America | `/assets/images/North%20America.jpg` |
| kindergarten | UNIT 1. AROUND THE WORLD AND MY COUNTRY | pre12 | 1 | listenchoose | North America | `/assets/images/North%20America.jpg` |
| kindergarten | UNIT 1. AROUND THE WORLD AND MY COUNTRY | pre2 | 1 | listenchoose | North America | `/assets/images/North%20America.jpg` |
| kindergarten | UNIT 1. AROUND THE WORLD AND MY COUNTRY | pre12 | 1 | listenchoose | Russia | `/assets/images/Asia.jpg` |
| kindergarten | UNIT 1. AROUND THE WORLD AND MY COUNTRY | pre11 | 1 | listenchoose | South America | `/assets/images/South%20America.jpg` |
| kindergarten | UNIT 1. AROUND THE WORLD AND MY COUNTRY | pre12 | 1 | listenchoose | South America | `/assets/images/South%20America.jpg` |
| kindergarten | UNIT 1. AROUND THE WORLD AND MY COUNTRY | pre12 | 1 | listenchoose | South America | `/assets/images/Asia.jpg` |
| kindergarten | UNIT 1. AROUND THE WORLD AND MY COUNTRY | pre12 | 1 | listenchoose | sunny | `/assets/images/South%20America.jpg` |
| kindergarten | UNIT 1. AROUND THE WORLD AND MY COUNTRY | pre12 | 1 | listenchoose | sunny | `/assets/images/Asia.jpg` |
| kindergarten | UNIT 1. AROUND THE WORLD AND MY COUNTRY | pre11 | 1 | listenchoose | Vietnam | `/assets/images/South%20America.jpg` |
| kindergarten | UNIT 1. AROUND THE WORLD AND MY COUNTRY | pre11 | 1 | lookchoose | Africa | `/assets/images/Africa.jpg` |
| kindergarten | UNIT 1. AROUND THE WORLD AND MY COUNTRY | pre11 | 2 | lookchoose | Africa | `/assets/images/Africa.jpg` |
| kindergarten | UNIT 1. AROUND THE WORLD AND MY COUNTRY | pre12 | 1 | lookchoose | Africa | `/assets/images/Africa.jpg` |
| kindergarten | UNIT 1. AROUND THE WORLD AND MY COUNTRY | pre2 | 1 | lookchoose | Africa | `/assets/images/Africa.jpg` |
| kindergarten | UNIT 1. AROUND THE WORLD AND MY COUNTRY | pre11 | 1 | lookchoose | Antarctica | `/assets/images/Antarctica.jpg` |
| kindergarten | UNIT 1. AROUND THE WORLD AND MY COUNTRY | pre11 | 2 | lookchoose | Antarctica | `/assets/images/Antarctica.jpg` |
| kindergarten | UNIT 1. AROUND THE WORLD AND MY COUNTRY | pre12 | 1 | lookchoose | Antarctica | `/assets/images/Antarctica.jpg` |
| kindergarten | UNIT 1. AROUND THE WORLD AND MY COUNTRY | pre2 | 1 | lookchoose | Antarctica | `/assets/images/Antarctica.jpg` |
| kindergarten | UNIT 1. AROUND THE WORLD AND MY COUNTRY | pre11 | 1 | lookchoose | Asia | `/assets/images/Asia.jpg` |
| kindergarten | UNIT 1. AROUND THE WORLD AND MY COUNTRY | pre11 | 2 | lookchoose | Asia | `/assets/images/Asia.jpg` |
| kindergarten | UNIT 1. AROUND THE WORLD AND MY COUNTRY | pre12 | 1 | lookchoose | Asia | `/assets/images/Asia.jpg` |
| kindergarten | UNIT 1. AROUND THE WORLD AND MY COUNTRY | pre12 | 2 | lookchoose | Asia | `/assets/images/Asia.jpg` |
| kindergarten | UNIT 1. AROUND THE WORLD AND MY COUNTRY | pre2 | 1 | lookchoose | Asia | `/assets/images/Asia.jpg` |
| kindergarten | UNIT 1. AROUND THE WORLD AND MY COUNTRY | pre3 | 1 | lookchoose | Asia | `/assets/images/Asia.jpg` |
| kindergarten | UNIT 1. AROUND THE WORLD AND MY COUNTRY | pre11 | 1 | lookchoose | Europe | `/assets/images/Europe.jpg` |
| kindergarten | UNIT 1. AROUND THE WORLD AND MY COUNTRY | pre11 | 2 | lookchoose | Europe | `/assets/images/Europe.jpg` |
| kindergarten | UNIT 1. AROUND THE WORLD AND MY COUNTRY | pre12 | 1 | lookchoose | Europe | `/assets/images/Europe.jpg` |
| kindergarten | UNIT 1. AROUND THE WORLD AND MY COUNTRY | pre2 | 1 | lookchoose | Europe | `/assets/images/Europe.jpg` |
| kindergarten | UNIT 1. AROUND THE WORLD AND MY COUNTRY | pre3 | 1 | lookchoose | Europe | `/assets/images/Europe.jpg` |
| kindergarten | UNIT 1. AROUND THE WORLD AND MY COUNTRY | pre11 | 1 | lookchoose | North America | `/assets/images/North%20America.jpg` |
| kindergarten | UNIT 1. AROUND THE WORLD AND MY COUNTRY | pre11 | 2 | lookchoose | North America | `/assets/images/North%20America.jpg` |
| kindergarten | UNIT 1. AROUND THE WORLD AND MY COUNTRY | pre12 | 1 | lookchoose | North America | `/assets/images/North%20America.jpg` |
| kindergarten | UNIT 1. AROUND THE WORLD AND MY COUNTRY | pre2 | 1 | lookchoose | North America | `/assets/images/North%20America.jpg` |
| kindergarten | UNIT 1. AROUND THE WORLD AND MY COUNTRY | pre11 | 1 | lookchoose | South America | `/assets/images/South%20America.jpg` |
| kindergarten | UNIT 1. AROUND THE WORLD AND MY COUNTRY | pre12 | 1 | lookchoose | South America | `/assets/images/South%20America.jpg` |
| kindergarten | UNIT 1. AROUND THE WORLD AND MY COUNTRY | pre11 | 1 | pronunciation | Africa | `/assets/images/Africa.jpg` |
| kindergarten | UNIT 1. AROUND THE WORLD AND MY COUNTRY | pre11 | 2 | pronunciation | Africa | `/assets/images/Africa.jpg` |
| kindergarten | UNIT 1. AROUND THE WORLD AND MY COUNTRY | pre12 | 1 | pronunciation | Africa | `/assets/images/Africa.jpg` |
| kindergarten | UNIT 1. AROUND THE WORLD AND MY COUNTRY | pre2 | 1 | pronunciation | Africa | `/assets/images/Africa.jpg` |
| kindergarten | UNIT 1. AROUND THE WORLD AND MY COUNTRY | pre11 | 1 | pronunciation | Antarctica | `/assets/images/Antarctica.jpg` |
| kindergarten | UNIT 1. AROUND THE WORLD AND MY COUNTRY | pre11 | 2 | pronunciation | Antarctica | `/assets/images/Antarctica.jpg` |
| kindergarten | UNIT 1. AROUND THE WORLD AND MY COUNTRY | pre12 | 1 | pronunciation | Antarctica | `/assets/images/Antarctica.jpg` |
| kindergarten | UNIT 1. AROUND THE WORLD AND MY COUNTRY | pre2 | 1 | pronunciation | Antarctica | `/assets/images/Antarctica.jpg` |
| kindergarten | UNIT 1. AROUND THE WORLD AND MY COUNTRY | pre11 | 1 | pronunciation | Asia | `/assets/images/Asia.jpg` |
| kindergarten | UNIT 1. AROUND THE WORLD AND MY COUNTRY | pre11 | 2 | pronunciation | Asia | `/assets/images/Asia.jpg` |
| kindergarten | UNIT 1. AROUND THE WORLD AND MY COUNTRY | pre12 | 1 | pronunciation | Asia | `/assets/images/Asia.jpg` |
| kindergarten | UNIT 1. AROUND THE WORLD AND MY COUNTRY | pre12 | 2 | pronunciation | Asia | `/assets/images/Asia.jpg` |
| kindergarten | UNIT 1. AROUND THE WORLD AND MY COUNTRY | pre2 | 1 | pronunciation | Asia | `/assets/images/Asia.jpg` |
| kindergarten | UNIT 1. AROUND THE WORLD AND MY COUNTRY | pre3 | 1 | pronunciation | Asia | `/assets/images/Asia.jpg` |
| kindergarten | UNIT 1. AROUND THE WORLD AND MY COUNTRY | pre11 | 1 | pronunciation | Europe | `/assets/images/Europe.jpg` |
| kindergarten | UNIT 1. AROUND THE WORLD AND MY COUNTRY | pre11 | 2 | pronunciation | Europe | `/assets/images/Europe.jpg` |
| kindergarten | UNIT 1. AROUND THE WORLD AND MY COUNTRY | pre12 | 1 | pronunciation | Europe | `/assets/images/Europe.jpg` |
| kindergarten | UNIT 1. AROUND THE WORLD AND MY COUNTRY | pre2 | 1 | pronunciation | Europe | `/assets/images/Europe.jpg` |
| kindergarten | UNIT 1. AROUND THE WORLD AND MY COUNTRY | pre3 | 1 | pronunciation | Europe | `/assets/images/Europe.jpg` |
| kindergarten | UNIT 1. AROUND THE WORLD AND MY COUNTRY | pre11 | 1 | pronunciation | North America | `/assets/images/North%20America.jpg` |
| kindergarten | UNIT 1. AROUND THE WORLD AND MY COUNTRY | pre11 | 2 | pronunciation | North America | `/assets/images/North%20America.jpg` |
| kindergarten | UNIT 1. AROUND THE WORLD AND MY COUNTRY | pre12 | 1 | pronunciation | North America | `/assets/images/North%20America.jpg` |
| kindergarten | UNIT 1. AROUND THE WORLD AND MY COUNTRY | pre2 | 1 | pronunciation | North America | `/assets/images/North%20America.jpg` |
| kindergarten | UNIT 1. AROUND THE WORLD AND MY COUNTRY | pre11 | 1 | pronunciation | South America | `/assets/images/South%20America.jpg` |
| kindergarten | UNIT 1. AROUND THE WORLD AND MY COUNTRY | pre12 | 1 | pronunciation | South America | `/assets/images/South%20America.jpg` |
| kindergarten | UNIT 10. CLASS, SCHOOL & 5 SENSES | pre11 | 1 | listenchoose | Africa | `/assets/images/Africa.jpg` |
| kindergarten | UNIT 10. CLASS, SCHOOL & 5 SENSES | pre11 | 2 | listenchoose | Africa | `/assets/images/Africa.jpg` |
| kindergarten | UNIT 10. CLASS, SCHOOL & 5 SENSES | pre11 | 1 | listenchoose | America | `/assets/images/Africa.jpg` |
| kindergarten | UNIT 10. CLASS, SCHOOL & 5 SENSES | pre11 | 1 | listenchoose | Asia | `/assets/images/Asia.jpg` |
| kindergarten | UNIT 10. CLASS, SCHOOL & 5 SENSES | pre11 | 1 | listenchoose | Asia | `/assets/images/Africa.jpg` |
| kindergarten | UNIT 10. CLASS, SCHOOL & 5 SENSES | pre11 | 2 | listenchoose | Asia | `/assets/images/Asia.jpg` |
| kindergarten | UNIT 10. CLASS, SCHOOL & 5 SENSES | pre11 | 2 | listenchoose | ear | `/assets/images/Africa.jpg` |
| kindergarten | UNIT 10. CLASS, SCHOOL & 5 SENSES | pre12 | 1 | listenchoose | Eraser | `/assets/images/Notebook.jpg` |
| kindergarten | UNIT 10. CLASS, SCHOOL & 5 SENSES | pre11 | 1 | listenchoose | Europe | `/assets/images/Europe.jpg` |
| kindergarten | UNIT 10. CLASS, SCHOOL & 5 SENSES | pre11 | 2 | listenchoose | Europe | `/assets/images/Europe.jpg` |
| kindergarten | UNIT 10. CLASS, SCHOOL & 5 SENSES | pre11 | 2 | listenchoose | hear | `/assets/images/Asia.jpg` |
| kindergarten | UNIT 10. CLASS, SCHOOL & 5 SENSES | pre11 | 1 | listenchoose | Korea | `/assets/images/Asia.jpg` |
| kindergarten | UNIT 10. CLASS, SCHOOL & 5 SENSES | pre11 | 2 | listenchoose | nose | `/assets/images/Europe.jpg` |
| kindergarten | UNIT 10. CLASS, SCHOOL & 5 SENSES | pre11 | 2 | listenchoose | nose | `/assets/images/Africa.jpg` |
| kindergarten | UNIT 10. CLASS, SCHOOL & 5 SENSES | pre12 | 1 | listenchoose | Notebook | `/assets/images/Notebook.jpg` |
| kindergarten | UNIT 10. CLASS, SCHOOL & 5 SENSES | pre11 | 1 | listenchoose | ruler | `/assets/images/Asia.jpg` |
| kindergarten | UNIT 10. CLASS, SCHOOL & 5 SENSES | pre11 | 2 | listenchoose | taste | `/assets/images/Europe.jpg` |
| kindergarten | UNIT 10. CLASS, SCHOOL & 5 SENSES | pre11 | 1 | lookchoose | Africa | `/assets/images/Africa.jpg` |
| kindergarten | UNIT 10. CLASS, SCHOOL & 5 SENSES | pre11 | 2 | lookchoose | Africa | `/assets/images/Africa.jpg` |
| kindergarten | UNIT 10. CLASS, SCHOOL & 5 SENSES | pre11 | 1 | lookchoose | Asia | `/assets/images/Asia.jpg` |
| kindergarten | UNIT 10. CLASS, SCHOOL & 5 SENSES | pre11 | 2 | lookchoose | Asia | `/assets/images/Asia.jpg` |
| kindergarten | UNIT 10. CLASS, SCHOOL & 5 SENSES | pre11 | 1 | lookchoose | Europe | `/assets/images/Europe.jpg` |
| kindergarten | UNIT 10. CLASS, SCHOOL & 5 SENSES | pre11 | 2 | lookchoose | Europe | `/assets/images/Europe.jpg` |
| kindergarten | UNIT 10. CLASS, SCHOOL & 5 SENSES | pre12 | 1 | lookchoose | Notebook | `/assets/images/Notebook.jpg` |
| kindergarten | UNIT 10. CLASS, SCHOOL & 5 SENSES | pre11 | 1 | pronunciation | Africa | `/assets/images/Africa.jpg` |
| kindergarten | UNIT 10. CLASS, SCHOOL & 5 SENSES | pre11 | 2 | pronunciation | Africa | `/assets/images/Africa.jpg` |
| kindergarten | UNIT 10. CLASS, SCHOOL & 5 SENSES | pre11 | 1 | pronunciation | Asia | `/assets/images/Asia.jpg` |
| kindergarten | UNIT 10. CLASS, SCHOOL & 5 SENSES | pre11 | 2 | pronunciation | Asia | `/assets/images/Asia.jpg` |
| kindergarten | UNIT 10. CLASS, SCHOOL & 5 SENSES | pre11 | 1 | pronunciation | Europe | `/assets/images/Europe.jpg` |
| kindergarten | UNIT 10. CLASS, SCHOOL & 5 SENSES | pre11 | 2 | pronunciation | Europe | `/assets/images/Europe.jpg` |
| kindergarten | UNIT 10. CLASS, SCHOOL & 5 SENSES | pre12 | 1 | pronunciation | Notebook | `/assets/images/Notebook.jpg` |
| kindergarten | UNIT 11. MY HOUSE | pre11 | 1 | listenchoose | Africa | `/assets/images/Africa.jpg` |
| kindergarten | UNIT 11. MY HOUSE | pre11 | 2 | listenchoose | Africa | `/assets/images/Africa.jpg` |
| kindergarten | UNIT 11. MY HOUSE | pre11 | 1 | listenchoose | America | `/assets/images/Europe.jpg` |
| kindergarten | UNIT 11. MY HOUSE | pre11 | 2 | listenchoose | Antarctica | `/assets/images/Antarctica.jpg` |
| kindergarten | UNIT 11. MY HOUSE | pre2 | 2 | listenchoose | Apartment | `/assets/images/Apartment.jpg` |
| kindergarten | UNIT 11. MY HOUSE | pre11 | 1 | listenchoose | Asia | `/assets/images/Asia.jpg` |
| kindergarten | UNIT 11. MY HOUSE | pre11 | 2 | listenchoose | Asia | `/assets/images/Asia.jpg` |
| kindergarten | UNIT 11. MY HOUSE | pre11 | 2 | listenchoose | Asia | `/assets/images/Africa.jpg` |
| kindergarten | UNIT 11. MY HOUSE | pre12 | 2 | listenchoose | Asia | `/assets/images/Asia.jpg` |
| kindergarten | UNIT 11. MY HOUSE | pre11 | 1 | listenchoose | Australia | `/assets/images/Europe.jpg` |
| kindergarten | UNIT 11. MY HOUSE | pre12 | 2 | listenchoose | bedroom | `/assets/images/Europe.jpg` |
| kindergarten | UNIT 11. MY HOUSE | pre11 | 2 | listenchoose | Canada | `/assets/images/Antarctica.jpg` |
| kindergarten | UNIT 11. MY HOUSE | pre11 | 2 | listenchoose | China | `/assets/images/South%20America.jpg` |
| kindergarten | UNIT 11. MY HOUSE | pre11 | 1 | listenchoose | England | `/assets/images/Africa.jpg` |
| kindergarten | UNIT 11. MY HOUSE | pre2 | 2 | listenchoose | England | `/assets/images/Garage.jpg` |
| kindergarten | UNIT 11. MY HOUSE | pre11 | 1 | listenchoose | Europe | `/assets/images/Europe.jpg` |
| kindergarten | UNIT 11. MY HOUSE | pre11 | 2 | listenchoose | Europe | `/assets/images/Europe.jpg` |
| kindergarten | UNIT 11. MY HOUSE | pre12 | 2 | listenchoose | Europe | `/assets/images/Europe.jpg` |
| kindergarten | UNIT 11. MY HOUSE | pre2 | 2 | listenchoose | Garage | `/assets/images/Garage.jpg` |
| kindergarten | UNIT 11. MY HOUSE | pre3 | 2 | listenchoose | Garage | `/assets/images/Garage.jpg` |
| kindergarten | UNIT 11. MY HOUSE | pre2 | 2 | listenchoose | Italy | `/assets/images/Apartment.jpg` |
| kindergarten | UNIT 11. MY HOUSE | pre11 | 2 | listenchoose | Korea | `/assets/images/North%20America.jpg` |
| kindergarten | UNIT 11. MY HOUSE | pre11 | 1 | listenchoose | lamp | `/assets/images/Africa.jpg` |
| kindergarten | UNIT 11. MY HOUSE | pre11 | 2 | listenchoose | living room | `/assets/images/North%20America.jpg` |
| kindergarten | UNIT 11. MY HOUSE | pre11 | 2 | listenchoose | North America | `/assets/images/North%20America.jpg` |
| kindergarten | UNIT 11. MY HOUSE | pre12 | 2 | listenchoose | Russia | `/assets/images/Europe.jpg` |
| kindergarten | UNIT 11. MY HOUSE | pre11 | 2 | listenchoose | South America | `/assets/images/South%20America.jpg` |
| kindergarten | UNIT 11. MY HOUSE | pre11 | 2 | listenchoose | Vietnam | `/assets/images/South%20America.jpg` |
| kindergarten | UNIT 11. MY HOUSE | pre2 | 2 | listenchoose | Vietnam | `/assets/images/Garage.jpg` |
| kindergarten | UNIT 11. MY HOUSE | pre11 | 1 | lookchoose | Africa | `/assets/images/Africa.jpg` |
| kindergarten | UNIT 11. MY HOUSE | pre11 | 2 | lookchoose | Africa | `/assets/images/Africa.jpg` |
| kindergarten | UNIT 11. MY HOUSE | pre11 | 2 | lookchoose | Antarctica | `/assets/images/Antarctica.jpg` |
| kindergarten | UNIT 11. MY HOUSE | pre2 | 2 | lookchoose | Apartment | `/assets/images/Apartment.jpg` |
| kindergarten | UNIT 11. MY HOUSE | pre11 | 1 | lookchoose | Asia | `/assets/images/Asia.jpg` |
| kindergarten | UNIT 11. MY HOUSE | pre11 | 2 | lookchoose | Asia | `/assets/images/Asia.jpg` |
| kindergarten | UNIT 11. MY HOUSE | pre12 | 2 | lookchoose | Asia | `/assets/images/Asia.jpg` |
| kindergarten | UNIT 11. MY HOUSE | pre11 | 1 | lookchoose | Europe | `/assets/images/Europe.jpg` |
| kindergarten | UNIT 11. MY HOUSE | pre11 | 2 | lookchoose | Europe | `/assets/images/Europe.jpg` |
| kindergarten | UNIT 11. MY HOUSE | pre12 | 2 | lookchoose | Europe | `/assets/images/Europe.jpg` |
| kindergarten | UNIT 11. MY HOUSE | pre2 | 2 | lookchoose | Garage | `/assets/images/Garage.jpg` |
| kindergarten | UNIT 11. MY HOUSE | pre3 | 2 | lookchoose | Garage | `/assets/images/Garage.jpg` |
| kindergarten | UNIT 11. MY HOUSE | pre11 | 2 | lookchoose | North America | `/assets/images/North%20America.jpg` |
| kindergarten | UNIT 11. MY HOUSE | pre11 | 2 | lookchoose | South America | `/assets/images/South%20America.jpg` |
| kindergarten | UNIT 11. MY HOUSE | pre11 | 1 | pronunciation | Africa | `/assets/images/Africa.jpg` |
| kindergarten | UNIT 11. MY HOUSE | pre11 | 2 | pronunciation | Africa | `/assets/images/Africa.jpg` |
| kindergarten | UNIT 11. MY HOUSE | pre11 | 2 | pronunciation | Antarctica | `/assets/images/Antarctica.jpg` |
| kindergarten | UNIT 11. MY HOUSE | pre2 | 2 | pronunciation | Apartment | `/assets/images/Apartment.jpg` |
| kindergarten | UNIT 11. MY HOUSE | pre11 | 1 | pronunciation | Asia | `/assets/images/Asia.jpg` |
| kindergarten | UNIT 11. MY HOUSE | pre11 | 2 | pronunciation | Asia | `/assets/images/Asia.jpg` |
| kindergarten | UNIT 11. MY HOUSE | pre12 | 2 | pronunciation | Asia | `/assets/images/Asia.jpg` |
| kindergarten | UNIT 11. MY HOUSE | pre11 | 1 | pronunciation | Europe | `/assets/images/Europe.jpg` |
| kindergarten | UNIT 11. MY HOUSE | pre11 | 2 | pronunciation | Europe | `/assets/images/Europe.jpg` |
| kindergarten | UNIT 11. MY HOUSE | pre12 | 2 | pronunciation | Europe | `/assets/images/Europe.jpg` |
| kindergarten | UNIT 11. MY HOUSE | pre2 | 2 | pronunciation | Garage | `/assets/images/Garage.jpg` |
| kindergarten | UNIT 11. MY HOUSE | pre3 | 2 | pronunciation | Garage | `/assets/images/Garage.jpg` |
| kindergarten | UNIT 11. MY HOUSE | pre11 | 2 | pronunciation | North America | `/assets/images/North%20America.jpg` |
| kindergarten | UNIT 11. MY HOUSE | pre11 | 2 | pronunciation | South America | `/assets/images/South%20America.jpg` |
| kindergarten | UNIT 12. CHRISTMAS & HAPPY NEW YEAR | pre11 | 1 | listenchoose | Africa | `/assets/images/Africa.jpg` |
| kindergarten | UNIT 12. CHRISTMAS & HAPPY NEW YEAR | pre11 | 1 | listenchoose | Africa | `/assets/images/Antarctica.jpg` |
| kindergarten | UNIT 12. CHRISTMAS & HAPPY NEW YEAR | pre11 | 2 | listenchoose | Africa | `/assets/images/Africa.jpg` |
| kindergarten | UNIT 12. CHRISTMAS & HAPPY NEW YEAR | pre3 | 2 | listenchoose | America | `/assets/images/Dog.jpg` |
| kindergarten | UNIT 12. CHRISTMAS & HAPPY NEW YEAR | pre11 | 1 | listenchoose | Antarctica | `/assets/images/Antarctica.jpg` |
| kindergarten | UNIT 12. CHRISTMAS & HAPPY NEW YEAR | pre11 | 1 | listenchoose | Antarctica | `/assets/images/Africa.jpg` |
| kindergarten | UNIT 12. CHRISTMAS & HAPPY NEW YEAR | pre11 | 2 | listenchoose | Antarctica | `/assets/images/Antarctica.jpg` |
| kindergarten | UNIT 12. CHRISTMAS & HAPPY NEW YEAR | pre11 | 1 | listenchoose | Asia | `/assets/images/Asia.jpg` |
| kindergarten | UNIT 12. CHRISTMAS & HAPPY NEW YEAR | pre11 | 2 | listenchoose | Asia | `/assets/images/Asia.jpg` |
| kindergarten | UNIT 12. CHRISTMAS & HAPPY NEW YEAR | pre12 | 2 | listenchoose | Asia | `/assets/images/Asia.jpg` |
| kindergarten | UNIT 12. CHRISTMAS & HAPPY NEW YEAR | pre11 | 1 | listenchoose | Bell | `/assets/images/Bell.jpg` |
| kindergarten | UNIT 12. CHRISTMAS & HAPPY NEW YEAR | pre12 | 1 | listenchoose | Bell | `/assets/images/Bell.jpg` |
| kindergarten | UNIT 12. CHRISTMAS & HAPPY NEW YEAR | pre11 | 2 | listenchoose | Canada | `/assets/images/Africa.jpg` |
| kindergarten | UNIT 12. CHRISTMAS & HAPPY NEW YEAR | pre12 | 1 | listenchoose | Canada | `/assets/images/Bell.jpg` |
| kindergarten | UNIT 12. CHRISTMAS & HAPPY NEW YEAR | pre2 | 2 | listenchoose | Cat | `/assets/images/Cat.jpg` |
| kindergarten | UNIT 12. CHRISTMAS & HAPPY NEW YEAR | pre3 | 2 | listenchoose | Cat | `/assets/images/Cat.jpg` |
| kindergarten | UNIT 12. CHRISTMAS & HAPPY NEW YEAR | pre3 | 2 | listenchoose | Cat | `/assets/images/Make%20A%20Wish.jpg` |
| kindergarten | UNIT 12. CHRISTMAS & HAPPY NEW YEAR | pre3 | 2 | listenchoose | Decorate The House | `/assets/images/Decorate%20The%20House.jpg` |
| kindergarten | UNIT 12. CHRISTMAS & HAPPY NEW YEAR | pre2 | 2 | listenchoose | Dog | `/assets/images/Dog.jpg` |
| kindergarten | UNIT 12. CHRISTMAS & HAPPY NEW YEAR | pre3 | 2 | listenchoose | Dog | `/assets/images/Dog.jpg` |
| kindergarten | UNIT 12. CHRISTMAS & HAPPY NEW YEAR | pre2 | 2 | listenchoose | Dragon | `/assets/images/Dragon.jpg` |
| kindergarten | UNIT 12. CHRISTMAS & HAPPY NEW YEAR | pre3 | 2 | listenchoose | Dragon | `/assets/images/Dragon.jpg` |
| kindergarten | UNIT 12. CHRISTMAS & HAPPY NEW YEAR | pre11 | 2 | listenchoose | England | `/assets/images/Europe.jpg` |
| kindergarten | UNIT 12. CHRISTMAS & HAPPY NEW YEAR | pre11 | 1 | listenchoose | Europe | `/assets/images/Europe.jpg` |
| kindergarten | UNIT 12. CHRISTMAS & HAPPY NEW YEAR | pre11 | 2 | listenchoose | Europe | `/assets/images/Europe.jpg` |
| kindergarten | UNIT 12. CHRISTMAS & HAPPY NEW YEAR | pre11 | 2 | listenchoose | Europe | `/assets/images/Africa.jpg` |
| kindergarten | UNIT 12. CHRISTMAS & HAPPY NEW YEAR | pre11 | 1 | listenchoose | gift | `/assets/images/Asia.jpg` |
| kindergarten | UNIT 12. CHRISTMAS & HAPPY NEW YEAR | pre2 | 2 | listenchoose | goat | `/assets/images/Rat.jpg` |
| kindergarten | UNIT 12. CHRISTMAS & HAPPY NEW YEAR | pre12 | 1 | listenchoose | Japan | `/assets/images/Bell.jpg` |
| kindergarten | UNIT 12. CHRISTMAS & HAPPY NEW YEAR | pre3 | 2 | listenchoose | Make A Wish | `/assets/images/Make%20A%20Wish.jpg` |
| kindergarten | UNIT 12. CHRISTMAS & HAPPY NEW YEAR | pre11 | 2 | listenchoose | mango | `/assets/images/Europe.jpg` |
| kindergarten | UNIT 12. CHRISTMAS & HAPPY NEW YEAR | pre11 | 2 | listenchoose | North America | `/assets/images/North%20America.jpg` |
| kindergarten | UNIT 12. CHRISTMAS & HAPPY NEW YEAR | pre2 | 2 | listenchoose | Ox | `/assets/images/Ox.jpg` |
| kindergarten | UNIT 12. CHRISTMAS & HAPPY NEW YEAR | pre3 | 2 | listenchoose | Ox | `/assets/images/Ox.jpg` |
| kindergarten | UNIT 12. CHRISTMAS & HAPPY NEW YEAR | pre12 | 2 | listenchoose | Party Hat | `/assets/images/Asia.jpg` |
| kindergarten | UNIT 12. CHRISTMAS & HAPPY NEW YEAR | pre3 | 2 | listenchoose | pig | `/assets/images/Cat.jpg` |
| kindergarten | UNIT 12. CHRISTMAS & HAPPY NEW YEAR | pre2 | 2 | listenchoose | Rat | `/assets/images/Rat.jpg` |
| kindergarten | UNIT 12. CHRISTMAS & HAPPY NEW YEAR | pre3 | 2 | listenchoose | Rat | `/assets/images/Rat.jpg` |
| kindergarten | UNIT 12. CHRISTMAS & HAPPY NEW YEAR | pre3 | 2 | listenchoose | Rat | `/assets/images/Decorate%20The%20House.jpg` |
| kindergarten | UNIT 12. CHRISTMAS & HAPPY NEW YEAR | pre11 | 1 | listenchoose | Russia | `/assets/images/Asia.jpg` |
| kindergarten | UNIT 12. CHRISTMAS & HAPPY NEW YEAR | pre11 | 1 | listenchoose | santa claus | `/assets/images/Asia.jpg` |
| kindergarten | UNIT 12. CHRISTMAS & HAPPY NEW YEAR | pre2 | 2 | listenchoose | snake | `/assets/images/Dragon.jpg` |
| kindergarten | UNIT 12. CHRISTMAS & HAPPY NEW YEAR | pre3 | 2 | listenchoose | snake | `/assets/images/Dog.jpg` |
| kindergarten | UNIT 12. CHRISTMAS & HAPPY NEW YEAR | pre11 | 2 | listenchoose | South America | `/assets/images/South%20America.jpg` |
| kindergarten | UNIT 12. CHRISTMAS & HAPPY NEW YEAR | pre2 | 2 | listenchoose | Vietnam | `/assets/images/Cat.jpg` |
| kindergarten | UNIT 12. CHRISTMAS & HAPPY NEW YEAR | pre2 | 2 | listenchoose | Vietnam | `/assets/images/Ox.jpg` |
| kindergarten | UNIT 12. CHRISTMAS & HAPPY NEW YEAR | pre11 | 1 | lookchoose | Africa | `/assets/images/Africa.jpg` |
| kindergarten | UNIT 12. CHRISTMAS & HAPPY NEW YEAR | pre11 | 2 | lookchoose | Africa | `/assets/images/Africa.jpg` |
| kindergarten | UNIT 12. CHRISTMAS & HAPPY NEW YEAR | pre11 | 1 | lookchoose | Antarctica | `/assets/images/Antarctica.jpg` |
| kindergarten | UNIT 12. CHRISTMAS & HAPPY NEW YEAR | pre11 | 2 | lookchoose | Antarctica | `/assets/images/Antarctica.jpg` |
| kindergarten | UNIT 12. CHRISTMAS & HAPPY NEW YEAR | pre11 | 1 | lookchoose | Asia | `/assets/images/Asia.jpg` |
| kindergarten | UNIT 12. CHRISTMAS & HAPPY NEW YEAR | pre11 | 2 | lookchoose | Asia | `/assets/images/Asia.jpg` |
| kindergarten | UNIT 12. CHRISTMAS & HAPPY NEW YEAR | pre12 | 2 | lookchoose | Asia | `/assets/images/Asia.jpg` |
| kindergarten | UNIT 12. CHRISTMAS & HAPPY NEW YEAR | pre11 | 1 | lookchoose | Bell | `/assets/images/Bell.jpg` |
| kindergarten | UNIT 12. CHRISTMAS & HAPPY NEW YEAR | pre12 | 1 | lookchoose | Bell | `/assets/images/Bell.jpg` |
| kindergarten | UNIT 12. CHRISTMAS & HAPPY NEW YEAR | pre2 | 2 | lookchoose | Cat | `/assets/images/Cat.jpg` |
| kindergarten | UNIT 12. CHRISTMAS & HAPPY NEW YEAR | pre3 | 2 | lookchoose | Cat | `/assets/images/Cat.jpg` |
| kindergarten | UNIT 12. CHRISTMAS & HAPPY NEW YEAR | pre3 | 2 | lookchoose | Decorate The House | `/assets/images/Decorate%20The%20House.jpg` |
| kindergarten | UNIT 12. CHRISTMAS & HAPPY NEW YEAR | pre2 | 2 | lookchoose | Dog | `/assets/images/Dog.jpg` |
| kindergarten | UNIT 12. CHRISTMAS & HAPPY NEW YEAR | pre3 | 2 | lookchoose | Dog | `/assets/images/Dog.jpg` |
| kindergarten | UNIT 12. CHRISTMAS & HAPPY NEW YEAR | pre2 | 2 | lookchoose | Dragon | `/assets/images/Dragon.jpg` |
| kindergarten | UNIT 12. CHRISTMAS & HAPPY NEW YEAR | pre3 | 2 | lookchoose | Dragon | `/assets/images/Dragon.jpg` |
| kindergarten | UNIT 12. CHRISTMAS & HAPPY NEW YEAR | pre11 | 1 | lookchoose | Europe | `/assets/images/Europe.jpg` |
| kindergarten | UNIT 12. CHRISTMAS & HAPPY NEW YEAR | pre11 | 2 | lookchoose | Europe | `/assets/images/Europe.jpg` |
| kindergarten | UNIT 12. CHRISTMAS & HAPPY NEW YEAR | pre3 | 2 | lookchoose | Make A Wish | `/assets/images/Make%20A%20Wish.jpg` |
| kindergarten | UNIT 12. CHRISTMAS & HAPPY NEW YEAR | pre11 | 2 | lookchoose | North America | `/assets/images/North%20America.jpg` |
| kindergarten | UNIT 12. CHRISTMAS & HAPPY NEW YEAR | pre2 | 2 | lookchoose | Ox | `/assets/images/Ox.jpg` |
| kindergarten | UNIT 12. CHRISTMAS & HAPPY NEW YEAR | pre3 | 2 | lookchoose | Ox | `/assets/images/Ox.jpg` |
| kindergarten | UNIT 12. CHRISTMAS & HAPPY NEW YEAR | pre2 | 2 | lookchoose | Rat | `/assets/images/Rat.jpg` |
| kindergarten | UNIT 12. CHRISTMAS & HAPPY NEW YEAR | pre3 | 2 | lookchoose | Rat | `/assets/images/Rat.jpg` |
| kindergarten | UNIT 12. CHRISTMAS & HAPPY NEW YEAR | pre11 | 2 | lookchoose | South America | `/assets/images/South%20America.jpg` |
| kindergarten | UNIT 12. CHRISTMAS & HAPPY NEW YEAR | pre11 | 1 | pronunciation | Africa | `/assets/images/Africa.jpg` |
| kindergarten | UNIT 12. CHRISTMAS & HAPPY NEW YEAR | pre11 | 2 | pronunciation | Africa | `/assets/images/Africa.jpg` |
| kindergarten | UNIT 12. CHRISTMAS & HAPPY NEW YEAR | pre11 | 1 | pronunciation | Antarctica | `/assets/images/Antarctica.jpg` |
| kindergarten | UNIT 12. CHRISTMAS & HAPPY NEW YEAR | pre11 | 2 | pronunciation | Antarctica | `/assets/images/Antarctica.jpg` |
| kindergarten | UNIT 12. CHRISTMAS & HAPPY NEW YEAR | pre11 | 1 | pronunciation | Asia | `/assets/images/Asia.jpg` |
| kindergarten | UNIT 12. CHRISTMAS & HAPPY NEW YEAR | pre11 | 2 | pronunciation | Asia | `/assets/images/Asia.jpg` |
| kindergarten | UNIT 12. CHRISTMAS & HAPPY NEW YEAR | pre12 | 2 | pronunciation | Asia | `/assets/images/Asia.jpg` |
| kindergarten | UNIT 12. CHRISTMAS & HAPPY NEW YEAR | pre11 | 1 | pronunciation | Bell | `/assets/images/Bell.jpg` |
| kindergarten | UNIT 12. CHRISTMAS & HAPPY NEW YEAR | pre12 | 1 | pronunciation | Bell | `/assets/images/Bell.jpg` |
| kindergarten | UNIT 12. CHRISTMAS & HAPPY NEW YEAR | pre2 | 2 | pronunciation | Cat | `/assets/images/Cat.jpg` |
| kindergarten | UNIT 12. CHRISTMAS & HAPPY NEW YEAR | pre3 | 2 | pronunciation | Cat | `/assets/images/Cat.jpg` |
| kindergarten | UNIT 12. CHRISTMAS & HAPPY NEW YEAR | pre3 | 2 | pronunciation | Decorate The House | `/assets/images/Decorate%20The%20House.jpg` |
| kindergarten | UNIT 12. CHRISTMAS & HAPPY NEW YEAR | pre2 | 2 | pronunciation | Dog | `/assets/images/Dog.jpg` |
| kindergarten | UNIT 12. CHRISTMAS & HAPPY NEW YEAR | pre3 | 2 | pronunciation | Dog | `/assets/images/Dog.jpg` |
| kindergarten | UNIT 12. CHRISTMAS & HAPPY NEW YEAR | pre2 | 2 | pronunciation | Dragon | `/assets/images/Dragon.jpg` |
| kindergarten | UNIT 12. CHRISTMAS & HAPPY NEW YEAR | pre3 | 2 | pronunciation | Dragon | `/assets/images/Dragon.jpg` |
| kindergarten | UNIT 12. CHRISTMAS & HAPPY NEW YEAR | pre11 | 1 | pronunciation | Europe | `/assets/images/Europe.jpg` |
| kindergarten | UNIT 12. CHRISTMAS & HAPPY NEW YEAR | pre11 | 2 | pronunciation | Europe | `/assets/images/Europe.jpg` |
| kindergarten | UNIT 12. CHRISTMAS & HAPPY NEW YEAR | pre3 | 2 | pronunciation | Make A Wish | `/assets/images/Make%20A%20Wish.jpg` |
| kindergarten | UNIT 12. CHRISTMAS & HAPPY NEW YEAR | pre11 | 2 | pronunciation | North America | `/assets/images/North%20America.jpg` |
| kindergarten | UNIT 12. CHRISTMAS & HAPPY NEW YEAR | pre2 | 2 | pronunciation | Ox | `/assets/images/Ox.jpg` |
| kindergarten | UNIT 12. CHRISTMAS & HAPPY NEW YEAR | pre3 | 2 | pronunciation | Ox | `/assets/images/Ox.jpg` |
| kindergarten | UNIT 12. CHRISTMAS & HAPPY NEW YEAR | pre2 | 2 | pronunciation | Rat | `/assets/images/Rat.jpg` |
| kindergarten | UNIT 12. CHRISTMAS & HAPPY NEW YEAR | pre3 | 2 | pronunciation | Rat | `/assets/images/Rat.jpg` |
| kindergarten | UNIT 12. CHRISTMAS & HAPPY NEW YEAR | pre11 | 2 | pronunciation | South America | `/assets/images/South%20America.jpg` |
| kindergarten | UNIT 2. THE SEASONS | pre11 | 1 | listenchoose | Africa | `/assets/images/Africa.jpg` |
| kindergarten | UNIT 2. THE SEASONS | pre11 | 1 | listenchoose | Africa | `/assets/images/Cloud.jpg` |
| kindergarten | UNIT 2. THE SEASONS | pre11 | 2 | listenchoose | Africa | `/assets/images/Africa.jpg` |
| kindergarten | UNIT 2. THE SEASONS | pre11 | 2 | listenchoose | Africa | `/assets/images/Antarctica.jpg` |
| kindergarten | UNIT 2. THE SEASONS | pre12 | 1 | listenchoose | America | `/assets/images/Asia.jpg` |
| kindergarten | UNIT 2. THE SEASONS | pre11 | 2 | listenchoose | Antarctica | `/assets/images/Antarctica.jpg` |
| kindergarten | UNIT 2. THE SEASONS | pre11 | 1 | listenchoose | Asia | `/assets/images/Asia.jpg` |
| kindergarten | UNIT 2. THE SEASONS | pre11 | 2 | listenchoose | Asia | `/assets/images/Asia.jpg` |
| kindergarten | UNIT 2. THE SEASONS | pre12 | 1 | listenchoose | Asia | `/assets/images/Asia.jpg` |
| kindergarten | UNIT 2. THE SEASONS | pre11 | 1 | listenchoose | Australia | `/assets/images/Europe.jpg` |
| kindergarten | UNIT 2. THE SEASONS | pre11 | 2 | listenchoose | Australia | `/assets/images/Europe.jpg` |
| kindergarten | UNIT 2. THE SEASONS | pre11 | 1 | listenchoose | China | `/assets/images/Wet.jpg` |
| kindergarten | UNIT 2. THE SEASONS | pre11 | 1 | listenchoose | China | `/assets/images/Cloud.jpg` |
| kindergarten | UNIT 2. THE SEASONS | pre11 | 2 | listenchoose | China | `/assets/images/Asia.jpg` |
| kindergarten | UNIT 2. THE SEASONS | pre11 | 2 | listenchoose | China | `/assets/images/Africa.jpg` |
| kindergarten | UNIT 2. THE SEASONS | pre11 | 1 | listenchoose | Cloud | `/assets/images/Cloud.jpg` |
| kindergarten | UNIT 2. THE SEASONS | pre12 | 1 | listenchoose | Cloudy | `/assets/images/Asia.jpg` |
| kindergarten | UNIT 2. THE SEASONS | pre11 | 2 | listenchoose | dress | `/assets/images/Asia.jpg` |
| kindergarten | UNIT 2. THE SEASONS | pre11 | 1 | listenchoose | Europe | `/assets/images/Europe.jpg` |
| kindergarten | UNIT 2. THE SEASONS | pre11 | 2 | listenchoose | Europe | `/assets/images/Europe.jpg` |
| kindergarten | UNIT 2. THE SEASONS | pre11 | 2 | listenchoose | hat | `/assets/images/Antarctica.jpg` |
| kindergarten | UNIT 2. THE SEASONS | pre11 | 1 | listenchoose | hot | `/assets/images/Africa.jpg` |
| kindergarten | UNIT 2. THE SEASONS | pre11 | 2 | listenchoose | Japan | `/assets/images/Antarctica.jpg` |
| kindergarten | UNIT 2. THE SEASONS | pre12 | 1 | listenchoose | Korea | `/assets/images/Asia.jpg` |
| kindergarten | UNIT 2. THE SEASONS | pre12 | 1 | listenchoose | Russia | `/assets/images/Asia.jpg` |
| kindergarten | UNIT 2. THE SEASONS | pre11 | 1 | listenchoose | Sky | `/assets/images/Africa.jpg` |
| kindergarten | UNIT 2. THE SEASONS | pre11 | 1 | listenchoose | Wet | `/assets/images/Wet.jpg` |
| kindergarten | UNIT 2. THE SEASONS | pre11 | 1 | listenchoose | Wet | `/assets/images/Cloud.jpg` |
| kindergarten | UNIT 2. THE SEASONS | pre11 | 1 | lookchoose | Africa | `/assets/images/Africa.jpg` |
| kindergarten | UNIT 2. THE SEASONS | pre11 | 2 | lookchoose | Africa | `/assets/images/Africa.jpg` |
| kindergarten | UNIT 2. THE SEASONS | pre11 | 2 | lookchoose | Antarctica | `/assets/images/Antarctica.jpg` |
| kindergarten | UNIT 2. THE SEASONS | pre11 | 1 | lookchoose | Asia | `/assets/images/Asia.jpg` |
| kindergarten | UNIT 2. THE SEASONS | pre11 | 2 | lookchoose | Asia | `/assets/images/Asia.jpg` |
| kindergarten | UNIT 2. THE SEASONS | pre12 | 1 | lookchoose | Asia | `/assets/images/Asia.jpg` |
| kindergarten | UNIT 2. THE SEASONS | pre11 | 1 | lookchoose | Cloud | `/assets/images/Cloud.jpg` |
| kindergarten | UNIT 2. THE SEASONS | pre11 | 1 | lookchoose | Europe | `/assets/images/Europe.jpg` |
| kindergarten | UNIT 2. THE SEASONS | pre11 | 2 | lookchoose | Europe | `/assets/images/Europe.jpg` |
| kindergarten | UNIT 2. THE SEASONS | pre11 | 1 | lookchoose | Wet | `/assets/images/Wet.jpg` |
| kindergarten | UNIT 2. THE SEASONS | pre11 | 1 | pronunciation | Africa | `/assets/images/Africa.jpg` |
| kindergarten | UNIT 2. THE SEASONS | pre11 | 2 | pronunciation | Africa | `/assets/images/Africa.jpg` |
| kindergarten | UNIT 2. THE SEASONS | pre11 | 2 | pronunciation | Antarctica | `/assets/images/Antarctica.jpg` |
| kindergarten | UNIT 2. THE SEASONS | pre11 | 1 | pronunciation | Asia | `/assets/images/Asia.jpg` |
| kindergarten | UNIT 2. THE SEASONS | pre11 | 2 | pronunciation | Asia | `/assets/images/Asia.jpg` |
| kindergarten | UNIT 2. THE SEASONS | pre12 | 1 | pronunciation | Asia | `/assets/images/Asia.jpg` |
| kindergarten | UNIT 2. THE SEASONS | pre11 | 1 | pronunciation | Cloud | `/assets/images/Cloud.jpg` |
| kindergarten | UNIT 2. THE SEASONS | pre11 | 1 | pronunciation | Europe | `/assets/images/Europe.jpg` |
| kindergarten | UNIT 2. THE SEASONS | pre11 | 2 | pronunciation | Europe | `/assets/images/Europe.jpg` |
| kindergarten | UNIT 2. THE SEASONS | pre11 | 1 | pronunciation | Wet | `/assets/images/Wet.jpg` |
| kindergarten | UNIT 3. TRANSPORT & JOB | pre11 | 1 | listenchoose | Africa | `/assets/images/Africa.jpg` |
| kindergarten | UNIT 3. TRANSPORT & JOB | pre11 | 2 | listenchoose | Africa | `/assets/images/Africa.jpg` |
| kindergarten | UNIT 3. TRANSPORT & JOB | pre11 | 1 | listenchoose | Antarctica | `/assets/images/Antarctica.jpg` |
| kindergarten | UNIT 3. TRANSPORT & JOB | pre11 | 2 | listenchoose | Antarctica | `/assets/images/Antarctica.jpg` |
| kindergarten | UNIT 3. TRANSPORT & JOB | pre11 | 1 | listenchoose | Asia | `/assets/images/Asia.jpg` |
| kindergarten | UNIT 3. TRANSPORT & JOB | pre11 | 1 | listenchoose | Asia | `/assets/images/Africa.jpg` |
| kindergarten | UNIT 3. TRANSPORT & JOB | pre11 | 2 | listenchoose | Asia | `/assets/images/Asia.jpg` |
| kindergarten | UNIT 3. TRANSPORT & JOB | pre11 | 1 | listenchoose | boat | `/assets/images/North%20America.jpg` |
| kindergarten | UNIT 3. TRANSPORT & JOB | pre11 | 1 | listenchoose | China | `/assets/images/Africa.jpg` |
| kindergarten | UNIT 3. TRANSPORT & JOB | pre11 | 1 | listenchoose | Europe | `/assets/images/Europe.jpg` |
| kindergarten | UNIT 3. TRANSPORT & JOB | pre11 | 2 | listenchoose | Europe | `/assets/images/Europe.jpg` |
| kindergarten | UNIT 3. TRANSPORT & JOB | pre11 | 1 | listenchoose | Korea | `/assets/images/Asia.jpg` |
| kindergarten | UNIT 3. TRANSPORT & JOB | pre11 | 1 | listenchoose | North America | `/assets/images/North%20America.jpg` |
| kindergarten | UNIT 3. TRANSPORT & JOB | pre11 | 2 | listenchoose | North America | `/assets/images/North%20America.jpg` |
| kindergarten | UNIT 3. TRANSPORT & JOB | pre11 | 1 | listenchoose | Russia | `/assets/images/Antarctica.jpg` |
| kindergarten | UNIT 3. TRANSPORT & JOB | pre11 | 2 | listenchoose | Russia | `/assets/images/Antarctica.jpg` |
| kindergarten | UNIT 3. TRANSPORT & JOB | pre11 | 1 | lookchoose | Africa | `/assets/images/Africa.jpg` |
| kindergarten | UNIT 3. TRANSPORT & JOB | pre11 | 2 | lookchoose | Africa | `/assets/images/Africa.jpg` |
| kindergarten | UNIT 3. TRANSPORT & JOB | pre11 | 1 | lookchoose | Antarctica | `/assets/images/Antarctica.jpg` |
| kindergarten | UNIT 3. TRANSPORT & JOB | pre11 | 2 | lookchoose | Antarctica | `/assets/images/Antarctica.jpg` |
| kindergarten | UNIT 3. TRANSPORT & JOB | pre11 | 1 | lookchoose | Asia | `/assets/images/Asia.jpg` |
| kindergarten | UNIT 3. TRANSPORT & JOB | pre11 | 2 | lookchoose | Asia | `/assets/images/Asia.jpg` |
| kindergarten | UNIT 3. TRANSPORT & JOB | pre11 | 1 | lookchoose | Europe | `/assets/images/Europe.jpg` |
| kindergarten | UNIT 3. TRANSPORT & JOB | pre11 | 2 | lookchoose | Europe | `/assets/images/Europe.jpg` |
| kindergarten | UNIT 3. TRANSPORT & JOB | pre11 | 1 | lookchoose | North America | `/assets/images/North%20America.jpg` |
| kindergarten | UNIT 3. TRANSPORT & JOB | pre11 | 2 | lookchoose | North America | `/assets/images/North%20America.jpg` |
| kindergarten | UNIT 3. TRANSPORT & JOB | pre11 | 1 | pronunciation | Africa | `/assets/images/Africa.jpg` |
| kindergarten | UNIT 3. TRANSPORT & JOB | pre11 | 2 | pronunciation | Africa | `/assets/images/Africa.jpg` |
| kindergarten | UNIT 3. TRANSPORT & JOB | pre11 | 1 | pronunciation | Antarctica | `/assets/images/Antarctica.jpg` |
| kindergarten | UNIT 3. TRANSPORT & JOB | pre11 | 2 | pronunciation | Antarctica | `/assets/images/Antarctica.jpg` |
| kindergarten | UNIT 3. TRANSPORT & JOB | pre11 | 1 | pronunciation | Asia | `/assets/images/Asia.jpg` |
| kindergarten | UNIT 3. TRANSPORT & JOB | pre11 | 2 | pronunciation | Asia | `/assets/images/Asia.jpg` |
| kindergarten | UNIT 3. TRANSPORT & JOB | pre11 | 1 | pronunciation | Europe | `/assets/images/Europe.jpg` |
| kindergarten | UNIT 3. TRANSPORT & JOB | pre11 | 2 | pronunciation | Europe | `/assets/images/Europe.jpg` |
| kindergarten | UNIT 3. TRANSPORT & JOB | pre11 | 1 | pronunciation | North America | `/assets/images/North%20America.jpg` |
| kindergarten | UNIT 3. TRANSPORT & JOB | pre11 | 2 | pronunciation | North America | `/assets/images/North%20America.jpg` |
| kindergarten | UNIT 4. THE EARTH | pre11 | 1 | listenchoose | Africa | `/assets/images/Africa.jpg` |
| kindergarten | UNIT 4. THE EARTH | pre11 | 1 | listenchoose | Africa | `/assets/images/Antarctica.jpg` |
| kindergarten | UNIT 4. THE EARTH | pre11 | 2 | listenchoose | Africa | `/assets/images/Africa.jpg` |
| kindergarten | UNIT 4. THE EARTH | pre11 | 2 | listenchoose | Africa | `/assets/images/Asia.jpg` |
| kindergarten | UNIT 4. THE EARTH | pre12 | 1 | listenchoose | Africa | `/assets/images/Africa.jpg` |
| kindergarten | UNIT 4. THE EARTH | pre11 | 1 | listenchoose | America | `/assets/images/Africa.jpg` |
| kindergarten | UNIT 4. THE EARTH | pre2 | 2 | listenchoose | America | `/assets/images/Asia.jpg` |
| kindergarten | UNIT 4. THE EARTH | pre11 | 1 | listenchoose | Antarctica | `/assets/images/Antarctica.jpg` |
| kindergarten | UNIT 4. THE EARTH | pre11 | 2 | listenchoose | Antarctica | `/assets/images/Antarctica.jpg` |
| kindergarten | UNIT 4. THE EARTH | pre11 | 1 | listenchoose | Asia | `/assets/images/Asia.jpg` |
| kindergarten | UNIT 4. THE EARTH | pre11 | 2 | listenchoose | Asia | `/assets/images/Asia.jpg` |
| kindergarten | UNIT 4. THE EARTH | pre11 | 2 | listenchoose | Asia | `/assets/images/North%20America.jpg` |
| kindergarten | UNIT 4. THE EARTH | pre12 | 1 | listenchoose | Asia | `/assets/images/Asia.jpg` |
| kindergarten | UNIT 4. THE EARTH | pre12 | 1 | listenchoose | Asia | `/assets/images/Africa.jpg` |
| kindergarten | UNIT 4. THE EARTH | pre12 | 2 | listenchoose | Asia | `/assets/images/Asia.jpg` |
| kindergarten | UNIT 4. THE EARTH | pre2 | 2 | listenchoose | Asia | `/assets/images/Asia.jpg` |
| kindergarten | UNIT 4. THE EARTH | pre11 | 1 | listenchoose | Australia | `/assets/images/Africa.jpg` |
| kindergarten | UNIT 4. THE EARTH | pre2 | 2 | listenchoose | Cambodia | `/assets/images/Asia.jpg` |
| kindergarten | UNIT 4. THE EARTH | pre11 | 2 | listenchoose | China | `/assets/images/North%20America.jpg` |
| kindergarten | UNIT 4. THE EARTH | pre11 | 1 | listenchoose | earth | `/assets/images/Asia.jpg` |
| kindergarten | UNIT 4. THE EARTH | pre11 | 1 | listenchoose | Europe | `/assets/images/Europe.jpg` |
| kindergarten | UNIT 4. THE EARTH | pre11 | 1 | listenchoose | Europe | `/assets/images/South%20America.jpg` |
| kindergarten | UNIT 4. THE EARTH | pre11 | 1 | listenchoose | Europe | `/assets/images/Africa.jpg` |
| kindergarten | UNIT 4. THE EARTH | pre11 | 2 | listenchoose | Europe | `/assets/images/Europe.jpg` |
| kindergarten | UNIT 4. THE EARTH | pre11 | 2 | listenchoose | Europe | `/assets/images/North%20America.jpg` |
| kindergarten | UNIT 4. THE EARTH | pre12 | 1 | listenchoose | Europe | `/assets/images/Europe.jpg` |
| kindergarten | UNIT 4. THE EARTH | pre12 | 1 | listenchoose | France | `/assets/images/Europe.jpg` |
| kindergarten | UNIT 4. THE EARTH | pre11 | 2 | listenchoose | glass | `/assets/images/Antarctica.jpg` |
| kindergarten | UNIT 4. THE EARTH | pre12 | 1 | listenchoose | Italy | `/assets/images/Asia.jpg` |
| kindergarten | UNIT 4. THE EARTH | pre11 | 2 | listenchoose | Japan | `/assets/images/Africa.jpg` |
| kindergarten | UNIT 4. THE EARTH | pre11 | 1 | listenchoose | Korea | `/assets/images/South%20America.jpg` |
| kindergarten | UNIT 4. THE EARTH | pre11 | 1 | listenchoose | moon | `/assets/images/South%20America.jpg` |
| kindergarten | UNIT 4. THE EARTH | pre11 | 1 | listenchoose | North America | `/assets/images/North%20America.jpg` |
| kindergarten | UNIT 4. THE EARTH | pre11 | 2 | listenchoose | North America | `/assets/images/North%20America.jpg` |
| kindergarten | UNIT 4. THE EARTH | pre11 | 1 | listenchoose | pig | `/assets/images/Asia.jpg` |
| kindergarten | UNIT 4. THE EARTH | pre2 | 2 | listenchoose | Plastic | `/assets/images/Asia.jpg` |
| kindergarten | UNIT 4. THE EARTH | pre11 | 2 | listenchoose | Sky | `/assets/images/North%20America.jpg` |
| kindergarten | UNIT 4. THE EARTH | pre11 | 1 | listenchoose | South America | `/assets/images/South%20America.jpg` |
| kindergarten | UNIT 4. THE EARTH | pre11 | 1 | listenchoose | South America | `/assets/images/Europe.jpg` |
| kindergarten | UNIT 4. THE EARTH | pre11 | 2 | listenchoose | Vietnam | `/assets/images/Asia.jpg` |
| kindergarten | UNIT 4. THE EARTH | pre12 | 2 | listenchoose | Vietnam | `/assets/images/Asia.jpg` |
| kindergarten | UNIT 4. THE EARTH | pre11 | 2 | listenchoose | water | `/assets/images/Antarctica.jpg` |
| kindergarten | UNIT 4. THE EARTH | pre11 | 1 | lookchoose | Africa | `/assets/images/Africa.jpg` |
| kindergarten | UNIT 4. THE EARTH | pre11 | 2 | lookchoose | Africa | `/assets/images/Africa.jpg` |
| kindergarten | UNIT 4. THE EARTH | pre12 | 1 | lookchoose | Africa | `/assets/images/Africa.jpg` |
| kindergarten | UNIT 4. THE EARTH | pre11 | 1 | lookchoose | Antarctica | `/assets/images/Antarctica.jpg` |
| kindergarten | UNIT 4. THE EARTH | pre11 | 2 | lookchoose | Antarctica | `/assets/images/Antarctica.jpg` |
| kindergarten | UNIT 4. THE EARTH | pre11 | 1 | lookchoose | Asia | `/assets/images/Asia.jpg` |
| kindergarten | UNIT 4. THE EARTH | pre11 | 2 | lookchoose | Asia | `/assets/images/Asia.jpg` |
| kindergarten | UNIT 4. THE EARTH | pre12 | 1 | lookchoose | Asia | `/assets/images/Asia.jpg` |
| kindergarten | UNIT 4. THE EARTH | pre12 | 2 | lookchoose | Asia | `/assets/images/Asia.jpg` |
| kindergarten | UNIT 4. THE EARTH | pre2 | 2 | lookchoose | Asia | `/assets/images/Asia.jpg` |
| kindergarten | UNIT 4. THE EARTH | pre11 | 1 | lookchoose | Europe | `/assets/images/Europe.jpg` |
| kindergarten | UNIT 4. THE EARTH | pre11 | 2 | lookchoose | Europe | `/assets/images/Europe.jpg` |
| kindergarten | UNIT 4. THE EARTH | pre12 | 1 | lookchoose | Europe | `/assets/images/Europe.jpg` |
| kindergarten | UNIT 4. THE EARTH | pre11 | 1 | lookchoose | North America | `/assets/images/North%20America.jpg` |
| kindergarten | UNIT 4. THE EARTH | pre11 | 2 | lookchoose | North America | `/assets/images/North%20America.jpg` |
| kindergarten | UNIT 4. THE EARTH | pre11 | 1 | lookchoose | South America | `/assets/images/South%20America.jpg` |
| kindergarten | UNIT 4. THE EARTH | pre11 | 1 | pronunciation | Africa | `/assets/images/Africa.jpg` |
| kindergarten | UNIT 4. THE EARTH | pre11 | 2 | pronunciation | Africa | `/assets/images/Africa.jpg` |
| kindergarten | UNIT 4. THE EARTH | pre12 | 1 | pronunciation | Africa | `/assets/images/Africa.jpg` |
| kindergarten | UNIT 4. THE EARTH | pre11 | 1 | pronunciation | Antarctica | `/assets/images/Antarctica.jpg` |
| kindergarten | UNIT 4. THE EARTH | pre11 | 2 | pronunciation | Antarctica | `/assets/images/Antarctica.jpg` |
| kindergarten | UNIT 4. THE EARTH | pre11 | 1 | pronunciation | Asia | `/assets/images/Asia.jpg` |
| kindergarten | UNIT 4. THE EARTH | pre11 | 2 | pronunciation | Asia | `/assets/images/Asia.jpg` |
| kindergarten | UNIT 4. THE EARTH | pre12 | 1 | pronunciation | Asia | `/assets/images/Asia.jpg` |
| kindergarten | UNIT 4. THE EARTH | pre12 | 2 | pronunciation | Asia | `/assets/images/Asia.jpg` |
| kindergarten | UNIT 4. THE EARTH | pre2 | 2 | pronunciation | Asia | `/assets/images/Asia.jpg` |
| kindergarten | UNIT 4. THE EARTH | pre11 | 1 | pronunciation | Europe | `/assets/images/Europe.jpg` |
| kindergarten | UNIT 4. THE EARTH | pre11 | 2 | pronunciation | Europe | `/assets/images/Europe.jpg` |
| kindergarten | UNIT 4. THE EARTH | pre12 | 1 | pronunciation | Europe | `/assets/images/Europe.jpg` |
| kindergarten | UNIT 4. THE EARTH | pre11 | 1 | pronunciation | North America | `/assets/images/North%20America.jpg` |
| kindergarten | UNIT 4. THE EARTH | pre11 | 2 | pronunciation | North America | `/assets/images/North%20America.jpg` |
| kindergarten | UNIT 4. THE EARTH | pre11 | 1 | pronunciation | South America | `/assets/images/South%20America.jpg` |
| kindergarten | UNIT 5. ANIMALS | pre11 | 1 | listenchoose | Africa | `/assets/images/Africa.jpg` |
| kindergarten | UNIT 5. ANIMALS | pre11 | 1 | listenchoose | Antarctica | `/assets/images/Antarctica.jpg` |
| kindergarten | UNIT 5. ANIMALS | pre11 | 1 | listenchoose | Asia | `/assets/images/Asia.jpg` |
| kindergarten | UNIT 5. ANIMALS | pre11 | 1 | listenchoose | Asia | `/assets/images/Europe.jpg` |
| kindergarten | UNIT 5. ANIMALS | pre11 | 2 | listenchoose | Asia | `/assets/images/Asia.jpg` |
| kindergarten | UNIT 5. ANIMALS | pre12 | 1 | listenchoose | Asia | `/assets/images/Asia.jpg` |
| kindergarten | UNIT 5. ANIMALS | pre11 | 1 | listenchoose | Australia | `/assets/images/Antarctica.jpg` |
| kindergarten | UNIT 5. ANIMALS | pre3 | 1 | listenchoose | Barn | `/assets/images/Barn.jpg` |
| kindergarten | UNIT 5. ANIMALS | pre11 | 1 | listenchoose | China | `/assets/images/Europe.jpg` |
| kindergarten | UNIT 5. ANIMALS | pre3 | 1 | listenchoose | Coop | `/assets/images/Coop.jpg` |
| kindergarten | UNIT 5. ANIMALS | pre3 | 1 | listenchoose | Coop | `/assets/images/Pasture.jpg` |
| kindergarten | UNIT 5. ANIMALS | pre3 | 1 | listenchoose | cow | `/assets/images/Coop.jpg` |
| kindergarten | UNIT 5. ANIMALS | pre3 | 1 | listenchoose | Donkey | `/assets/images/Trough.jpg` |
| kindergarten | UNIT 5. ANIMALS | pre11 | 1 | listenchoose | duck | `/assets/images/Europe.jpg` |
| kindergarten | UNIT 5. ANIMALS | pre11 | 1 | listenchoose | Europe | `/assets/images/Europe.jpg` |
| kindergarten | UNIT 5. ANIMALS | pre11 | 1 | listenchoose | Europe | `/assets/images/North%20America.jpg` |
| kindergarten | UNIT 5. ANIMALS | pre11 | 2 | listenchoose | Europe | `/assets/images/Europe.jpg` |
| kindergarten | UNIT 5. ANIMALS | pre11 | 2 | listenchoose | Europe | `/assets/images/Asia.jpg` |
| kindergarten | UNIT 5. ANIMALS | pre3 | 1 | listenchoose | farmer | `/assets/images/Stable.jpg` |
| kindergarten | UNIT 5. ANIMALS | pre3 | 1 | listenchoose | Feed | `/assets/images/Feed.jpg` |
| kindergarten | UNIT 5. ANIMALS | pre3 | 1 | listenchoose | Fence | `/assets/images/Fence.jpg` |
| kindergarten | UNIT 5. ANIMALS | pre3 | 1 | listenchoose | Flock | `/assets/images/Flock.jpg` |
| kindergarten | UNIT 5. ANIMALS | pre3 | 1 | listenchoose | Flock | `/assets/images/Herd.jpg` |
| kindergarten | UNIT 5. ANIMALS | pre2 | 1 | listenchoose | Hen | `/assets/images/Hen.jpg` |
| kindergarten | UNIT 5. ANIMALS | pre3 | 1 | listenchoose | Herd | `/assets/images/Herd.jpg` |
| kindergarten | UNIT 5. ANIMALS | pre3 | 1 | listenchoose | Herd | `/assets/images/Feed.jpg` |
| kindergarten | UNIT 5. ANIMALS | pre11 | 1 | listenchoose | horse | `/assets/images/Africa.jpg` |
| kindergarten | UNIT 5. ANIMALS | pre11 | 2 | listenchoose | Japan | `/assets/images/Europe.jpg` |
| kindergarten | UNIT 5. ANIMALS | pre11 | 2 | listenchoose | Korea | `/assets/images/Asia.jpg` |
| kindergarten | UNIT 5. ANIMALS | pre2 | 1 | listenchoose | Lamb | `/assets/images/Sow.jpg` |
| kindergarten | UNIT 5. ANIMALS | pre11 | 2 | listenchoose | monkey | `/assets/images/Asia.jpg` |
| kindergarten | UNIT 5. ANIMALS | pre11 | 1 | listenchoose | North America | `/assets/images/North%20America.jpg` |
| kindergarten | UNIT 5. ANIMALS | pre11 | 1 | listenchoose | North America | `/assets/images/Africa.jpg` |
| kindergarten | UNIT 5. ANIMALS | pre3 | 1 | listenchoose | Pasture | `/assets/images/Pasture.jpg` |
| kindergarten | UNIT 5. ANIMALS | pre3 | 1 | listenchoose | Pasture | `/assets/images/Stable.jpg` |
| kindergarten | UNIT 5. ANIMALS | pre3 | 1 | listenchoose | pig | `/assets/images/Herd.jpg` |
| kindergarten | UNIT 5. ANIMALS | pre3 | 1 | listenchoose | pig | `/assets/images/Fence.jpg` |
| kindergarten | UNIT 5. ANIMALS | pre2 | 1 | listenchoose | Pony | `/assets/images/Sow.jpg` |
| kindergarten | UNIT 5. ANIMALS | pre3 | 1 | listenchoose | sheep | `/assets/images/Barn.jpg` |
| kindergarten | UNIT 5. ANIMALS | pre2 | 1 | listenchoose | Sow | `/assets/images/Sow.jpg` |
| kindergarten | UNIT 5. ANIMALS | pre3 | 1 | listenchoose | Stable | `/assets/images/Stable.jpg` |
| kindergarten | UNIT 5. ANIMALS | pre3 | 1 | listenchoose | Trough | `/assets/images/Trough.jpg` |
| kindergarten | UNIT 5. ANIMALS | pre3 | 1 | listenchoose | Trough | `/assets/images/Flock.jpg` |
| kindergarten | UNIT 5. ANIMALS | pre3 | 1 | listenchoose | Turkey | `/assets/images/Coop.jpg` |
| kindergarten | UNIT 5. ANIMALS | pre11 | 1 | lookchoose | Africa | `/assets/images/Africa.jpg` |
| kindergarten | UNIT 5. ANIMALS | pre11 | 1 | lookchoose | Antarctica | `/assets/images/Antarctica.jpg` |
| kindergarten | UNIT 5. ANIMALS | pre11 | 1 | lookchoose | Asia | `/assets/images/Asia.jpg` |
| kindergarten | UNIT 5. ANIMALS | pre11 | 2 | lookchoose | Asia | `/assets/images/Asia.jpg` |
| kindergarten | UNIT 5. ANIMALS | pre12 | 1 | lookchoose | Asia | `/assets/images/Asia.jpg` |
| kindergarten | UNIT 5. ANIMALS | pre3 | 1 | lookchoose | Barn | `/assets/images/Barn.jpg` |
| kindergarten | UNIT 5. ANIMALS | pre3 | 1 | lookchoose | Coop | `/assets/images/Coop.jpg` |
| kindergarten | UNIT 5. ANIMALS | pre11 | 1 | lookchoose | Europe | `/assets/images/Europe.jpg` |
| kindergarten | UNIT 5. ANIMALS | pre11 | 2 | lookchoose | Europe | `/assets/images/Europe.jpg` |
| kindergarten | UNIT 5. ANIMALS | pre3 | 1 | lookchoose | Feed | `/assets/images/Feed.jpg` |
| kindergarten | UNIT 5. ANIMALS | pre3 | 1 | lookchoose | Fence | `/assets/images/Fence.jpg` |
| kindergarten | UNIT 5. ANIMALS | pre3 | 1 | lookchoose | Flock | `/assets/images/Flock.jpg` |
| kindergarten | UNIT 5. ANIMALS | pre2 | 1 | lookchoose | Hen | `/assets/images/Hen.jpg` |
| kindergarten | UNIT 5. ANIMALS | pre3 | 1 | lookchoose | Herd | `/assets/images/Herd.jpg` |
| kindergarten | UNIT 5. ANIMALS | pre11 | 1 | lookchoose | North America | `/assets/images/North%20America.jpg` |
| kindergarten | UNIT 5. ANIMALS | pre3 | 1 | lookchoose | Pasture | `/assets/images/Pasture.jpg` |
| kindergarten | UNIT 5. ANIMALS | pre2 | 1 | lookchoose | Sow | `/assets/images/Sow.jpg` |
| kindergarten | UNIT 5. ANIMALS | pre3 | 1 | lookchoose | Stable | `/assets/images/Stable.jpg` |
| kindergarten | UNIT 5. ANIMALS | pre3 | 1 | lookchoose | Trough | `/assets/images/Trough.jpg` |
| kindergarten | UNIT 5. ANIMALS | pre11 | 1 | pronunciation | Africa | `/assets/images/Africa.jpg` |
| kindergarten | UNIT 5. ANIMALS | pre11 | 1 | pronunciation | Antarctica | `/assets/images/Antarctica.jpg` |
| kindergarten | UNIT 5. ANIMALS | pre11 | 1 | pronunciation | Asia | `/assets/images/Asia.jpg` |
| kindergarten | UNIT 5. ANIMALS | pre11 | 2 | pronunciation | Asia | `/assets/images/Asia.jpg` |
| kindergarten | UNIT 5. ANIMALS | pre12 | 1 | pronunciation | Asia | `/assets/images/Asia.jpg` |
| kindergarten | UNIT 5. ANIMALS | pre3 | 1 | pronunciation | Barn | `/assets/images/Barn.jpg` |
| kindergarten | UNIT 5. ANIMALS | pre3 | 1 | pronunciation | Coop | `/assets/images/Coop.jpg` |
| kindergarten | UNIT 5. ANIMALS | pre11 | 1 | pronunciation | Europe | `/assets/images/Europe.jpg` |
| kindergarten | UNIT 5. ANIMALS | pre11 | 2 | pronunciation | Europe | `/assets/images/Europe.jpg` |
| kindergarten | UNIT 5. ANIMALS | pre3 | 1 | pronunciation | Feed | `/assets/images/Feed.jpg` |
| kindergarten | UNIT 5. ANIMALS | pre3 | 1 | pronunciation | Fence | `/assets/images/Fence.jpg` |
| kindergarten | UNIT 5. ANIMALS | pre3 | 1 | pronunciation | Flock | `/assets/images/Flock.jpg` |
| kindergarten | UNIT 5. ANIMALS | pre2 | 1 | pronunciation | Hen | `/assets/images/Hen.jpg` |
| kindergarten | UNIT 5. ANIMALS | pre3 | 1 | pronunciation | Herd | `/assets/images/Herd.jpg` |
| kindergarten | UNIT 5. ANIMALS | pre11 | 1 | pronunciation | North America | `/assets/images/North%20America.jpg` |
| kindergarten | UNIT 5. ANIMALS | pre3 | 1 | pronunciation | Pasture | `/assets/images/Pasture.jpg` |
| kindergarten | UNIT 5. ANIMALS | pre2 | 1 | pronunciation | Sow | `/assets/images/Sow.jpg` |
| kindergarten | UNIT 5. ANIMALS | pre3 | 1 | pronunciation | Stable | `/assets/images/Stable.jpg` |
| kindergarten | UNIT 5. ANIMALS | pre3 | 1 | pronunciation | Trough | `/assets/images/Trough.jpg` |
| kindergarten | UNIT 6. PLANT & VEGETABLE | pre11 | 1 | listenchoose | Africa | `/assets/images/Africa.jpg` |
| kindergarten | UNIT 6. PLANT & VEGETABLE | pre11 | 2 | listenchoose | Africa | `/assets/images/Africa.jpg` |
| kindergarten | UNIT 6. PLANT & VEGETABLE | pre11 | 1 | listenchoose | Antarctica | `/assets/images/Antarctica.jpg` |
| kindergarten | UNIT 6. PLANT & VEGETABLE | pre11 | 1 | listenchoose | Antarctica | `/assets/images/Europe.jpg` |
| kindergarten | UNIT 6. PLANT & VEGETABLE | pre11 | 2 | listenchoose | Antarctica | `/assets/images/Antarctica.jpg` |
| kindergarten | UNIT 6. PLANT & VEGETABLE | pre11 | 1 | listenchoose | Asia | `/assets/images/Asia.jpg` |
| kindergarten | UNIT 6. PLANT & VEGETABLE | pre11 | 2 | listenchoose | Asia | `/assets/images/Asia.jpg` |
| kindergarten | UNIT 6. PLANT & VEGETABLE | pre11 | 2 | listenchoose | Australia | `/assets/images/Antarctica.jpg` |
| kindergarten | UNIT 6. PLANT & VEGETABLE | pre11 | 2 | listenchoose | carrot | `/assets/images/Asia.jpg` |
| kindergarten | UNIT 6. PLANT & VEGETABLE | pre11 | 2 | listenchoose | China | `/assets/images/Asia.jpg` |
| kindergarten | UNIT 6. PLANT & VEGETABLE | pre11 | 1 | listenchoose | Europe | `/assets/images/Europe.jpg` |
| kindergarten | UNIT 6. PLANT & VEGETABLE | pre11 | 2 | listenchoose | Europe | `/assets/images/Europe.jpg` |
| kindergarten | UNIT 6. PLANT & VEGETABLE | pre11 | 1 | listenchoose | flower | `/assets/images/Africa.jpg` |
| kindergarten | UNIT 6. PLANT & VEGETABLE | pre11 | 1 | listenchoose | leaves | `/assets/images/Antarctica.jpg` |
| kindergarten | UNIT 6. PLANT & VEGETABLE | pre11 | 2 | listenchoose | Vietnam | `/assets/images/Antarctica.jpg` |
| kindergarten | UNIT 6. PLANT & VEGETABLE | pre11 | 1 | lookchoose | Africa | `/assets/images/Africa.jpg` |
| kindergarten | UNIT 6. PLANT & VEGETABLE | pre11 | 2 | lookchoose | Africa | `/assets/images/Africa.jpg` |
| kindergarten | UNIT 6. PLANT & VEGETABLE | pre11 | 1 | lookchoose | Antarctica | `/assets/images/Antarctica.jpg` |
| kindergarten | UNIT 6. PLANT & VEGETABLE | pre11 | 2 | lookchoose | Antarctica | `/assets/images/Antarctica.jpg` |
| kindergarten | UNIT 6. PLANT & VEGETABLE | pre11 | 1 | lookchoose | Asia | `/assets/images/Asia.jpg` |
| kindergarten | UNIT 6. PLANT & VEGETABLE | pre11 | 2 | lookchoose | Asia | `/assets/images/Asia.jpg` |
| kindergarten | UNIT 6. PLANT & VEGETABLE | pre11 | 1 | lookchoose | Europe | `/assets/images/Europe.jpg` |
| kindergarten | UNIT 6. PLANT & VEGETABLE | pre11 | 2 | lookchoose | Europe | `/assets/images/Europe.jpg` |
| kindergarten | UNIT 6. PLANT & VEGETABLE | pre11 | 1 | pronunciation | Africa | `/assets/images/Africa.jpg` |
| kindergarten | UNIT 6. PLANT & VEGETABLE | pre11 | 2 | pronunciation | Africa | `/assets/images/Africa.jpg` |
| kindergarten | UNIT 6. PLANT & VEGETABLE | pre11 | 1 | pronunciation | Antarctica | `/assets/images/Antarctica.jpg` |
| kindergarten | UNIT 6. PLANT & VEGETABLE | pre11 | 2 | pronunciation | Antarctica | `/assets/images/Antarctica.jpg` |
| kindergarten | UNIT 6. PLANT & VEGETABLE | pre11 | 1 | pronunciation | Asia | `/assets/images/Asia.jpg` |
| kindergarten | UNIT 6. PLANT & VEGETABLE | pre11 | 2 | pronunciation | Asia | `/assets/images/Asia.jpg` |
| kindergarten | UNIT 6. PLANT & VEGETABLE | pre11 | 1 | pronunciation | Europe | `/assets/images/Europe.jpg` |
| kindergarten | UNIT 6. PLANT & VEGETABLE | pre11 | 2 | pronunciation | Europe | `/assets/images/Europe.jpg` |
| kindergarten | UNIT 7. HAPPY SUMMER | pre11 | 1 | listenchoose | Africa | `/assets/images/Africa.jpg` |
| kindergarten | UNIT 7. HAPPY SUMMER | pre11 | 2 | listenchoose | Africa | `/assets/images/Africa.jpg` |
| kindergarten | UNIT 7. HAPPY SUMMER | pre11 | 2 | listenchoose | Africa | `/assets/images/Europe.jpg` |
| kindergarten | UNIT 7. HAPPY SUMMER | pre11 | 1 | listenchoose | Antarctica | `/assets/images/Antarctica.jpg` |
| kindergarten | UNIT 7. HAPPY SUMMER | pre11 | 1 | listenchoose | Asia | `/assets/images/Asia.jpg` |
| kindergarten | UNIT 7. HAPPY SUMMER | pre11 | 2 | listenchoose | Asia | `/assets/images/Asia.jpg` |
| kindergarten | UNIT 7. HAPPY SUMMER | pre12 | 1 | listenchoose | Asia | `/assets/images/Asia.jpg` |
| kindergarten | UNIT 7. HAPPY SUMMER | pre11 | 1 | listenchoose | Australia | `/assets/images/Africa.jpg` |
| kindergarten | UNIT 7. HAPPY SUMMER | pre11 | 1 | listenchoose | beach | `/assets/images/Europe.jpg` |
| kindergarten | UNIT 7. HAPPY SUMMER | pre11 | 2 | listenchoose | Canada | `/assets/images/Africa.jpg` |
| kindergarten | UNIT 7. HAPPY SUMMER | pre11 | 2 | listenchoose | China | `/assets/images/Asia.jpg` |
| kindergarten | UNIT 7. HAPPY SUMMER | pre2 | 2 | listenchoose | Dolphin | `/assets/images/Sailing.jpg` |
| kindergarten | UNIT 7. HAPPY SUMMER | pre2 | 1 | listenchoose | England | `/assets/images/Sand%20Castle.jpg` |
| kindergarten | UNIT 7. HAPPY SUMMER | pre11 | 1 | listenchoose | Europe | `/assets/images/Europe.jpg` |
| kindergarten | UNIT 7. HAPPY SUMMER | pre11 | 1 | listenchoose | Europe | `/assets/images/North%20America.jpg` |
| kindergarten | UNIT 7. HAPPY SUMMER | pre11 | 2 | listenchoose | Europe | `/assets/images/Europe.jpg` |
| kindergarten | UNIT 7. HAPPY SUMMER | pre12 | 1 | listenchoose | India | `/assets/images/Asia.jpg` |
| kindergarten | UNIT 7. HAPPY SUMMER | pre11 | 2 | listenchoose | Korea | `/assets/images/Asia.jpg` |
| kindergarten | UNIT 7. HAPPY SUMMER | pre11 | 1 | listenchoose | North America | `/assets/images/North%20America.jpg` |
| kindergarten | UNIT 7. HAPPY SUMMER | pre12 | 2 | listenchoose | octopus | `/assets/images/Sailing.jpg` |
| kindergarten | UNIT 7. HAPPY SUMMER | pre11 | 1 | listenchoose | Russia | `/assets/images/North%20America.jpg` |
| kindergarten | UNIT 7. HAPPY SUMMER | pre12 | 2 | listenchoose | Sailing | `/assets/images/Sailing.jpg` |
| kindergarten | UNIT 7. HAPPY SUMMER | pre2 | 2 | listenchoose | Sailing | `/assets/images/Sailing.jpg` |
| kindergarten | UNIT 7. HAPPY SUMMER | pre3 | 2 | listenchoose | Sailing | `/assets/images/Sailing.jpg` |
| kindergarten | UNIT 7. HAPPY SUMMER | pre2 | 1 | listenchoose | Sand Castle | `/assets/images/Sand%20Castle.jpg` |
| kindergarten | UNIT 7. HAPPY SUMMER | pre3 | 1 | listenchoose | Sand Castle | `/assets/images/Sand%20Castle.jpg` |
| kindergarten | UNIT 7. HAPPY SUMMER | pre11 | 2 | listenchoose | sea-lion | `/assets/images/Asia.jpg` |
| kindergarten | UNIT 7. HAPPY SUMMER | pre2 | 2 | listenchoose | sea-lion | `/assets/images/Sailing.jpg` |
| kindergarten | UNIT 7. HAPPY SUMMER | pre11 | 1 | listenchoose | surfing | `/assets/images/Africa.jpg` |
| kindergarten | UNIT 7. HAPPY SUMMER | pre11 | 1 | listenchoose | Vietnam | `/assets/images/Antarctica.jpg` |
| kindergarten | UNIT 7. HAPPY SUMMER | pre11 | 1 | listenchoose | Vietnam | `/assets/images/Africa.jpg` |
| kindergarten | UNIT 7. HAPPY SUMMER | pre11 | 2 | listenchoose | Windsurfing | `/assets/images/Asia.jpg` |
| kindergarten | UNIT 7. HAPPY SUMMER | pre11 | 1 | lookchoose | Africa | `/assets/images/Africa.jpg` |
| kindergarten | UNIT 7. HAPPY SUMMER | pre11 | 2 | lookchoose | Africa | `/assets/images/Africa.jpg` |
| kindergarten | UNIT 7. HAPPY SUMMER | pre11 | 1 | lookchoose | Antarctica | `/assets/images/Antarctica.jpg` |
| kindergarten | UNIT 7. HAPPY SUMMER | pre11 | 1 | lookchoose | Asia | `/assets/images/Asia.jpg` |
| kindergarten | UNIT 7. HAPPY SUMMER | pre11 | 2 | lookchoose | Asia | `/assets/images/Asia.jpg` |
| kindergarten | UNIT 7. HAPPY SUMMER | pre12 | 1 | lookchoose | Asia | `/assets/images/Asia.jpg` |
| kindergarten | UNIT 7. HAPPY SUMMER | pre11 | 1 | lookchoose | Europe | `/assets/images/Europe.jpg` |
| kindergarten | UNIT 7. HAPPY SUMMER | pre11 | 2 | lookchoose | Europe | `/assets/images/Europe.jpg` |
| kindergarten | UNIT 7. HAPPY SUMMER | pre11 | 1 | lookchoose | North America | `/assets/images/North%20America.jpg` |
| kindergarten | UNIT 7. HAPPY SUMMER | pre12 | 2 | lookchoose | Sailing | `/assets/images/Sailing.jpg` |
| kindergarten | UNIT 7. HAPPY SUMMER | pre2 | 2 | lookchoose | Sailing | `/assets/images/Sailing.jpg` |
| kindergarten | UNIT 7. HAPPY SUMMER | pre3 | 2 | lookchoose | Sailing | `/assets/images/Sailing.jpg` |
| kindergarten | UNIT 7. HAPPY SUMMER | pre2 | 1 | lookchoose | Sand Castle | `/assets/images/Sand%20Castle.jpg` |
| kindergarten | UNIT 7. HAPPY SUMMER | pre3 | 1 | lookchoose | Sand Castle | `/assets/images/Sand%20Castle.jpg` |
| kindergarten | UNIT 7. HAPPY SUMMER | pre11 | 1 | pronunciation | Africa | `/assets/images/Africa.jpg` |
| kindergarten | UNIT 7. HAPPY SUMMER | pre11 | 2 | pronunciation | Africa | `/assets/images/Africa.jpg` |
| kindergarten | UNIT 7. HAPPY SUMMER | pre11 | 1 | pronunciation | Antarctica | `/assets/images/Antarctica.jpg` |
| kindergarten | UNIT 7. HAPPY SUMMER | pre11 | 1 | pronunciation | Asia | `/assets/images/Asia.jpg` |
| kindergarten | UNIT 7. HAPPY SUMMER | pre11 | 2 | pronunciation | Asia | `/assets/images/Asia.jpg` |
| kindergarten | UNIT 7. HAPPY SUMMER | pre12 | 1 | pronunciation | Asia | `/assets/images/Asia.jpg` |
| kindergarten | UNIT 7. HAPPY SUMMER | pre11 | 1 | pronunciation | Europe | `/assets/images/Europe.jpg` |
| kindergarten | UNIT 7. HAPPY SUMMER | pre11 | 2 | pronunciation | Europe | `/assets/images/Europe.jpg` |
| kindergarten | UNIT 7. HAPPY SUMMER | pre11 | 1 | pronunciation | North America | `/assets/images/North%20America.jpg` |
| kindergarten | UNIT 7. HAPPY SUMMER | pre12 | 2 | pronunciation | Sailing | `/assets/images/Sailing.jpg` |
| kindergarten | UNIT 7. HAPPY SUMMER | pre2 | 2 | pronunciation | Sailing | `/assets/images/Sailing.jpg` |
| kindergarten | UNIT 7. HAPPY SUMMER | pre3 | 2 | pronunciation | Sailing | `/assets/images/Sailing.jpg` |
| kindergarten | UNIT 7. HAPPY SUMMER | pre2 | 1 | pronunciation | Sand Castle | `/assets/images/Sand%20Castle.jpg` |
| kindergarten | UNIT 7. HAPPY SUMMER | pre3 | 1 | pronunciation | Sand Castle | `/assets/images/Sand%20Castle.jpg` |
| kindergarten | UNIT 8. EXPLORE YOUR SUROUNDINGS | pre11 | 1 | listenchoose | Africa | `/assets/images/Africa.jpg` |
| kindergarten | UNIT 8. EXPLORE YOUR SUROUNDINGS | pre11 | 1 | listenchoose | Africa | `/assets/images/Asia.jpg` |
| kindergarten | UNIT 8. EXPLORE YOUR SUROUNDINGS | pre2 | 2 | listenchoose | Ant | `/assets/images/Full%20Caterpillar.jpg` |
| kindergarten | UNIT 8. EXPLORE YOUR SUROUNDINGS | pre11 | 1 | listenchoose | Asia | `/assets/images/Asia.jpg` |
| kindergarten | UNIT 8. EXPLORE YOUR SUROUNDINGS | pre11 | 2 | listenchoose | Asia | `/assets/images/Asia.jpg` |
| kindergarten | UNIT 8. EXPLORE YOUR SUROUNDINGS | pre11 | 2 | listenchoose | Caterpillar | `/assets/images/Caterpillar.jpg` |
| kindergarten | UNIT 8. EXPLORE YOUR SUROUNDINGS | pre12 | 2 | listenchoose | Caterpillar | `/assets/images/Caterpillar.jpg` |
| kindergarten | UNIT 8. EXPLORE YOUR SUROUNDINGS | pre2 | 2 | listenchoose | Caterpillar | `/assets/images/Caterpillar.jpg` |
| kindergarten | UNIT 8. EXPLORE YOUR SUROUNDINGS | pre3 | 2 | listenchoose | Caterpillar | `/assets/images/Caterpillar.jpg` |
| kindergarten | UNIT 8. EXPLORE YOUR SUROUNDINGS | pre2 | 2 | listenchoose | Dragonfly | `/assets/images/Full%20Caterpillar.jpg` |
| kindergarten | UNIT 8. EXPLORE YOUR SUROUNDINGS | pre11 | 1 | listenchoose | Europe | `/assets/images/Europe.jpg` |
| kindergarten | UNIT 8. EXPLORE YOUR SUROUNDINGS | pre11 | 2 | listenchoose | Europe | `/assets/images/Europe.jpg` |
| kindergarten | UNIT 8. EXPLORE YOUR SUROUNDINGS | pre11 | 2 | listenchoose | Fly | `/assets/images/Asia.jpg` |
| kindergarten | UNIT 8. EXPLORE YOUR SUROUNDINGS | pre2 | 2 | listenchoose | Full Caterpillar | `/assets/images/Full%20Caterpillar.jpg` |
| kindergarten | UNIT 8. EXPLORE YOUR SUROUNDINGS | pre3 | 2 | listenchoose | Full Caterpillar | `/assets/images/Full%20Caterpillar.jpg` |
| kindergarten | UNIT 8. EXPLORE YOUR SUROUNDINGS | pre11 | 1 | listenchoose | Island | `/assets/images/Europe.jpg` |
| kindergarten | UNIT 8. EXPLORE YOUR SUROUNDINGS | pre11 | 2 | listenchoose | labybug | `/assets/images/Asia.jpg` |
| kindergarten | UNIT 8. EXPLORE YOUR SUROUNDINGS | pre11 | 1 | listenchoose | Mountain | `/assets/images/Africa.jpg` |
| kindergarten | UNIT 8. EXPLORE YOUR SUROUNDINGS | pre3 | 2 | listenchoose | Strawberry | `/assets/images/Full%20Caterpillar.jpg` |
| kindergarten | UNIT 8. EXPLORE YOUR SUROUNDINGS | pre12 | 2 | listenchoose | sun | `/assets/images/Caterpillar.jpg` |
| kindergarten | UNIT 8. EXPLORE YOUR SUROUNDINGS | pre11 | 2 | listenchoose | Vietnam | `/assets/images/Europe.jpg` |
| kindergarten | UNIT 8. EXPLORE YOUR SUROUNDINGS | pre11 | 1 | lookchoose | Africa | `/assets/images/Africa.jpg` |
| kindergarten | UNIT 8. EXPLORE YOUR SUROUNDINGS | pre11 | 1 | lookchoose | Asia | `/assets/images/Asia.jpg` |
| kindergarten | UNIT 8. EXPLORE YOUR SUROUNDINGS | pre11 | 2 | lookchoose | Asia | `/assets/images/Asia.jpg` |
| kindergarten | UNIT 8. EXPLORE YOUR SUROUNDINGS | pre11 | 2 | lookchoose | Caterpillar | `/assets/images/Caterpillar.jpg` |
| kindergarten | UNIT 8. EXPLORE YOUR SUROUNDINGS | pre12 | 2 | lookchoose | Caterpillar | `/assets/images/Caterpillar.jpg` |
| kindergarten | UNIT 8. EXPLORE YOUR SUROUNDINGS | pre2 | 2 | lookchoose | Caterpillar | `/assets/images/Caterpillar.jpg` |
| kindergarten | UNIT 8. EXPLORE YOUR SUROUNDINGS | pre3 | 2 | lookchoose | Caterpillar | `/assets/images/Caterpillar.jpg` |
| kindergarten | UNIT 8. EXPLORE YOUR SUROUNDINGS | pre11 | 1 | lookchoose | Europe | `/assets/images/Europe.jpg` |
| kindergarten | UNIT 8. EXPLORE YOUR SUROUNDINGS | pre11 | 2 | lookchoose | Europe | `/assets/images/Europe.jpg` |
| kindergarten | UNIT 8. EXPLORE YOUR SUROUNDINGS | pre2 | 2 | lookchoose | Full Caterpillar | `/assets/images/Full%20Caterpillar.jpg` |
| kindergarten | UNIT 8. EXPLORE YOUR SUROUNDINGS | pre3 | 2 | lookchoose | Full Caterpillar | `/assets/images/Full%20Caterpillar.jpg` |
| kindergarten | UNIT 8. EXPLORE YOUR SUROUNDINGS | pre11 | 1 | pronunciation | Africa | `/assets/images/Africa.jpg` |
| kindergarten | UNIT 8. EXPLORE YOUR SUROUNDINGS | pre11 | 1 | pronunciation | Asia | `/assets/images/Asia.jpg` |
| kindergarten | UNIT 8. EXPLORE YOUR SUROUNDINGS | pre11 | 2 | pronunciation | Asia | `/assets/images/Asia.jpg` |
| kindergarten | UNIT 8. EXPLORE YOUR SUROUNDINGS | pre11 | 2 | pronunciation | Caterpillar | `/assets/images/Caterpillar.jpg` |
| kindergarten | UNIT 8. EXPLORE YOUR SUROUNDINGS | pre12 | 2 | pronunciation | Caterpillar | `/assets/images/Caterpillar.jpg` |
| kindergarten | UNIT 8. EXPLORE YOUR SUROUNDINGS | pre2 | 2 | pronunciation | Caterpillar | `/assets/images/Caterpillar.jpg` |
| kindergarten | UNIT 8. EXPLORE YOUR SUROUNDINGS | pre3 | 2 | pronunciation | Caterpillar | `/assets/images/Caterpillar.jpg` |
| kindergarten | UNIT 8. EXPLORE YOUR SUROUNDINGS | pre11 | 1 | pronunciation | Europe | `/assets/images/Europe.jpg` |
| kindergarten | UNIT 8. EXPLORE YOUR SUROUNDINGS | pre11 | 2 | pronunciation | Europe | `/assets/images/Europe.jpg` |
| kindergarten | UNIT 8. EXPLORE YOUR SUROUNDINGS | pre2 | 2 | pronunciation | Full Caterpillar | `/assets/images/Full%20Caterpillar.jpg` |
| kindergarten | UNIT 8. EXPLORE YOUR SUROUNDINGS | pre3 | 2 | pronunciation | Full Caterpillar | `/assets/images/Full%20Caterpillar.jpg` |
| kindergarten | UNIT 9. ALL ABOUT ME | pre11 | 1 | listenchoose | Africa | `/assets/images/Africa.jpg` |
| kindergarten | UNIT 9. ALL ABOUT ME | pre11 | 2 | listenchoose | Africa | `/assets/images/Africa.jpg` |
| kindergarten | UNIT 9. ALL ABOUT ME | pre11 | 2 | listenchoose | Africa | `/assets/images/Europe.jpg` |
| kindergarten | UNIT 9. ALL ABOUT ME | pre11 | 1 | listenchoose | America | `/assets/images/Asia.jpg` |
| kindergarten | UNIT 9. ALL ABOUT ME | pre11 | 1 | listenchoose | Antarctica | `/assets/images/Antarctica.jpg` |
| kindergarten | UNIT 9. ALL ABOUT ME | pre11 | 1 | listenchoose | Asia | `/assets/images/Asia.jpg` |
| kindergarten | UNIT 9. ALL ABOUT ME | pre11 | 1 | listenchoose | Asia | `/assets/images/Antarctica.jpg` |
| kindergarten | UNIT 9. ALL ABOUT ME | pre11 | 1 | listenchoose | Asia | `/assets/images/Europe.jpg` |
| kindergarten | UNIT 9. ALL ABOUT ME | pre11 | 2 | listenchoose | Asia | `/assets/images/Asia.jpg` |
| kindergarten | UNIT 9. ALL ABOUT ME | pre11 | 2 | listenchoose | Asia | `/assets/images/Africa.jpg` |
| kindergarten | UNIT 9. ALL ABOUT ME | pre11 | 2 | listenchoose | Australia | `/assets/images/Europe.jpg` |
| kindergarten | UNIT 9. ALL ABOUT ME | pre11 | 1 | listenchoose | Canada | `/assets/images/Africa.jpg` |
| kindergarten | UNIT 9. ALL ABOUT ME | pre11 | 1 | listenchoose | eat | `/assets/images/Africa.jpg` |
| kindergarten | UNIT 9. ALL ABOUT ME | pre11 | 1 | listenchoose | England | `/assets/images/Africa.jpg` |
| kindergarten | UNIT 9. ALL ABOUT ME | pre11 | 1 | listenchoose | England | `/assets/images/Europe.jpg` |
| kindergarten | UNIT 9. ALL ABOUT ME | pre11 | 1 | listenchoose | Europe | `/assets/images/Europe.jpg` |
| kindergarten | UNIT 9. ALL ABOUT ME | pre11 | 2 | listenchoose | Europe | `/assets/images/Europe.jpg` |
| kindergarten | UNIT 9. ALL ABOUT ME | pre11 | 2 | listenchoose | happy | `/assets/images/Asia.jpg` |
| kindergarten | UNIT 9. ALL ABOUT ME | pre3 | 2 | listenchoose | hungry | `/assets/images/Surprised.jpg` |
| kindergarten | UNIT 9. ALL ABOUT ME | pre11 | 2 | listenchoose | Japan | `/assets/images/Asia.jpg` |
| kindergarten | UNIT 9. ALL ABOUT ME | pre11 | 2 | listenchoose | Scared | `/assets/images/Europe.jpg` |
| kindergarten | UNIT 9. ALL ABOUT ME | pre3 | 2 | listenchoose | silly | `/assets/images/Surprised.jpg` |
| kindergarten | UNIT 9. ALL ABOUT ME | pre11 | 1 | listenchoose | sister | `/assets/images/Europe.jpg` |
| kindergarten | UNIT 9. ALL ABOUT ME | pre3 | 2 | listenchoose | Surprised | `/assets/images/Surprised.jpg` |
| kindergarten | UNIT 9. ALL ABOUT ME | pre11 | 1 | lookchoose | Africa | `/assets/images/Africa.jpg` |
| kindergarten | UNIT 9. ALL ABOUT ME | pre11 | 2 | lookchoose | Africa | `/assets/images/Africa.jpg` |
| kindergarten | UNIT 9. ALL ABOUT ME | pre11 | 1 | lookchoose | Antarctica | `/assets/images/Antarctica.jpg` |
| kindergarten | UNIT 9. ALL ABOUT ME | pre11 | 1 | lookchoose | Asia | `/assets/images/Asia.jpg` |
| kindergarten | UNIT 9. ALL ABOUT ME | pre11 | 2 | lookchoose | Asia | `/assets/images/Asia.jpg` |
| kindergarten | UNIT 9. ALL ABOUT ME | pre11 | 1 | lookchoose | Europe | `/assets/images/Europe.jpg` |
| kindergarten | UNIT 9. ALL ABOUT ME | pre11 | 2 | lookchoose | Europe | `/assets/images/Europe.jpg` |
| kindergarten | UNIT 9. ALL ABOUT ME | pre3 | 2 | lookchoose | Surprised | `/assets/images/Surprised.jpg` |
| kindergarten | UNIT 9. ALL ABOUT ME | pre11 | 1 | pronunciation | Africa | `/assets/images/Africa.jpg` |
| kindergarten | UNIT 9. ALL ABOUT ME | pre11 | 2 | pronunciation | Africa | `/assets/images/Africa.jpg` |
| kindergarten | UNIT 9. ALL ABOUT ME | pre11 | 1 | pronunciation | Antarctica | `/assets/images/Antarctica.jpg` |
| kindergarten | UNIT 9. ALL ABOUT ME | pre11 | 1 | pronunciation | Asia | `/assets/images/Asia.jpg` |
| kindergarten | UNIT 9. ALL ABOUT ME | pre11 | 2 | pronunciation | Asia | `/assets/images/Asia.jpg` |
| kindergarten | UNIT 9. ALL ABOUT ME | pre11 | 1 | pronunciation | Europe | `/assets/images/Europe.jpg` |
| kindergarten | UNIT 9. ALL ABOUT ME | pre11 | 2 | pronunciation | Europe | `/assets/images/Europe.jpg` |
| kindergarten | UNIT 9. ALL ABOUT ME | pre3 | 2 | pronunciation | Surprised | `/assets/images/Surprised.jpg` |

## Ảnh remote-only (có URL nhưng chưa có file local)

_Không có._

---

## Ghi chú

- **Lệch số câu**: mỗi game đọc sheet Excel riêng (`GameData`, `Game_LookChoose`, `Game_Pronunciation`).
- ListenChoose thường dùng từ dạng `ox zodiac`; LookChoose/Pronunciation dùng `ox`.
- Ảnh con giáp thường chỉ có file `* zodiac.jpg`, không có `ox.jpg`, `cat.jpg`…
- Script kiểm tra sau khi áp dụng logic `resolveImageUrl` (ưu tiên `/assets/` từ API + fallback `zodiac`).
