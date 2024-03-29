/*
 * @Author: raphael
 * @Date: 2021-04-26 18:59:17
 * @LastEditTime: 2021-04-26 19:05:19
 * @LastEditors: raphael
 * @Description:
 */

 var handle = function (str) {
     const stack = [];
     const arr = [];
     let word = '';
     let num = 0;
     for (let i = 0; i < str.length; i++) {
         if (isNaN(str[i])) {
             while (str[i] && isNaN(str[i])) {
                 word += str[i];
                 i++;
             }
             if (word === 'pop') {
                 arr.push(stack.pop());
             }
             word = '';
         } else if (!isNaN(str[i])) {
             while (!isNaN(str[i]) && str[i].trim() !== '') {
                 num = num * 10 + Number(str[i]);
                 i++;
             }
             stack.push(num);
             num = 0;
         }
     }
     let sum = 0;
     arr.forEach((item, index) => {
         sum += item * (index + 1);
     });
     return sum
 };

 const str = `push 773
 pop
 push 134
 push 568
 push 139
 pop
 push 144
 push 572
 push 829
 pop
 push 680
 pop
 push 199
 pop
 push 203
 push 318
 push 550
 push 637
 push 890
 push 410
 push 22
 push 318
 push 400
 push 248
 push 16
 push 351
 push 124
 push 686
 push 637
 push 369
 push 555
 push 409
 pop
 push 240
 push 543
 push 695
 pop
 push 872
 push 169
 push 11
 pop
 pop
 push 40
 push 520
 push 176
 push 48
 pop
 pop
 push 245
 pop
 push 590
 push 530
 pop
 push 174
 pop
 push 111
 pop
 pop
 push 527
 push 22
 pop
 push 102
 pop
 push 747
 push 270
 push 686
 push 150
 pop
 push 322
 pop
 push 585
 push 210
 push 325
 push 715
 pop
 push 740
 push 791
 push 981
 pop
 push 233
 pop
 push 841
 pop
 push 46
 push 543
 pop
 push 149
 push 455
 push 937
 push 794
 push 845
 pop
 pop
 push 704
 push 12
 pop
 pop
 push 414
 pop
 push 677
 push 403
 push 353
 pop
 push 396
 push 207
 push 695
 push 885
 pop
 push 383
 push 41
 push 229
 pop
 pop
 push 254
 push 169
 pop
 push 550
 push 340
 push 791
 pop
 pop
 push 448
 push 109
 push 317
 push 550
 pop
 pop
 push 934
 push 24
 push 54
 push 541
 push 948
 pop
 push 54
 push 550
 push 905
 push 677
 push 141
 push 337
 push 448
 push 980
 push 166
 push 469
 push 827
 pop
 push 875
 pop
 push 576
 push 239
 pop
 pop
 push 867
 push 67
 pop
 pop
 push 186
 push 957
 push 613
 push 189
 push 102
 push 168
 pop
 push 455
 push 690
 pop
 pop
 push 895
 push 641
 pop
 push 339
 pop
 push 3
 push 846
 pop
 pop
 pop
 push 291
 push 51
 pop
 pop
 push 853
 push 935
 push 75
 push 527
 push 74
 push 23
 push 946
 push 293
 push 44
 push 195
 push 422
 push 941
 push 995
 push 985
 pop
 pop
 push 941
 push 31
 push 54
 pop
 push 371
 push 501
 push 41
 push 54
 pop
 pop
 push 177
 push 510
 pop
 pop
 pop
 push 400
 push 628
 push 740
 push 33
 pop
 push 10
 push 408
 push 795
 pop
 push 763
 pop
 push 927
 pop
 pop
 push 612
 push 913
 pop
 push 752
 push 20
 push 885
 pop
 push 921
 push 154
 push 607
 push 434
 pop
 pop
 push 66
 pop
 push 467
 push 781
 pop
 pop
 push 142
 pop
 pop
 push 701
 push 397
 pop
 push 119
 pop
 push 90
 push 177
 pop
 push 342
 push 725
 pop
 push 57
 push 664
 push 445
 push 77
 pop
 push 534
 push 361
 pop
 push 817
 push 863
 pop
 push 777
 push 348
 push 581
 push 426
 push 124
 push 104
 pop
 push 820
 push 562
 pop
 push 735
 push 471
 push 742
 pop
 push 973
 push 124
 push 682
 push 745
 push 701
 pop
 push 273
 push 718
 push 35
 pop
 push 900
 pop
 push 546
 pop
 pop
 push 59
 pop
 pop
 push 854
 push 473
 pop
 push 633
 push 223
 pop
 push 820
 push 339
 push 48
 push 982
 push 142
 pop
 push 899
 push 114
 push 599
 pop
 push 618
 push 937
 pop
 pop
 pop
 pop
 push 130
 pop
 push 166
 push 658
 push 430
 push 282
 push 857
 push 541
 pop
 push 525
 push 323
 push 1
 push 768
 push 364
 push 36
 pop
 push 278
 pop
 push 354
 push 803
 push 39
 pop
 pop
 push 295
 push 494
 push 299
 push 79
 push 134
 push 736
 push 754
 push 51
 push 922
 push 622
 pop
 push 231
 push 604
 push 312
 push 384
 push 376
 push 4
 push 320
 pop
 pop
 pop
 pop
 push 573
 push 129
 push 538
 push 17
 pop
 push 243
 push 630
 pop
 pop
 push 543
 pop
 push 891
 pop
 push 56
 push 590
 push 633
 push 809
 push 695
 pop
 pop
 push 681
 pop
 push 932
 push 553
 push 841
 push 805
 pop
 push 988
 push 935
 push 199
 push 446
 push 876
 pop
 pop
 push 174
 push 704
 push 152
 push 280
 push 642
 push 392
 push 295
 push 80
 push 42
 push 716
 pop
 pop
 push 856
 push 110
 push 670
 push 506
 push 731
 pop
 push 63
 push 841
 push 503
 pop
 push 568
 push 221
 pop
 push 934
 push 220
 push 216
 push 426
 pop
 push 938
 push 158
 push 915
 push 106
 pop
 push 300
 push 313
 push 393
 push 343
 pop
 push 161
 pop
 pop
 pop
 push 130
 push 324
 push 853
 push 680
 push 249
 push 896
 push 455
 push 899
 push 315
 push 545
 pop
 pop
 pop
 push 225
 pop
 pop
 push 431
 pop
 push 659
 push 146
 push 568
 pop
 push 770
 pop
 pop
 pop
 pop
 pop
 push 616
 push 223
 pop
 push 195
 push 959
 pop
 push 833
 push 303
 push 73
 push 192
 push 369
 pop
 push 716
 push 215
 push 85
 push 144
 push 206
 push 444
 push 283
 push 224
 push 15
 push 799
 push 345
 push 718
 pop
 pop
 pop
 push 73
 push 648
 push 280
 pop
 pop
 push 677
 push 974
 push 837
 push 775
 pop
 push 36
 pop
 push 928
 pop
 push 601
 push 177
 push 598
 push 884
 push 430
 push 959
 push 429
 pop
 pop
 push 483
 push 142
 push 153
 pop
 push 439
 push 473
 pop
 push 745
 push 319
 pop
 push 363
 push 735
 pop
 pop
 push 907
 push 716
 push 190
 push 821
 push 626
 push 836
 push 180
 push 768
 push 748
 pop
 push 756
 push 319
 pop
 pop
 push 67
 push 112
 push 26
 push 454
 push 44
 pop
 pop
 push 74
 pop
 push 179
 push 957
 pop
 push 713
 pop
 pop
 push 50
 pop
 pop
 pop
 push 26
 push 409
 push 560
 pop
 push 771
 push 937
 push 302
 push 572
 push 483
 pop
 push 665
 push 714
 push 328
 push 550
 push 370
 pop
 push 667
 push 344
 push 838
 push 964
 push 932
 push 973
 push 416
 push 547
 push 552
 push 428
 pop
 push 700
 pop
 push 752
 pop
 push 1
 push 306
 push 46
 push 79
 push 95
 pop
 pop
 pop
 pop
 push 133
 pop
 push 175
 push 497
 push 815
 push 974
 push 893
 push 811
 push 743
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 push 780
 push 855
 push 231
 pop
 push 914
 pop
 push 896
 push 23
 push 131
 push 265
 push 568
 pop
 push 544
 push 642
 pop
 push 294
 push 342
 push 402
 push 669
 pop
 push 828
 push 696
 pop
 pop
 push 953
 pop
 push 536
 push 11
 push 280
 push 108
 push 451
 pop
 push 942
 push 619
 pop
 push 200
 pop
 push 133
 push 826
 push 501
 pop
 pop
 pop
 pop
 push 245
 push 688
 push 826
 push 107
 push 782
 pop
 push 892
 push 212
 push 274
 push 966
 pop
 push 238
 pop
 push 754
 pop
 push 108
 push 880
 pop
 push 827
 push 533
 pop
 push 701
 pop
 pop
 push 401
 pop
 push 794
 push 129
 push 252
 push 2
 push 228
 push 951
 pop
 push 9
 push 640
 pop
 push 80
 pop
 pop
 pop
 push 921
 pop
 push 650
 pop
 push 593
 push 45
 push 284
 push 202
 push 991
 pop
 push 335
 push 249
 push 127
 pop
 push 251
 push 589
 push 102
 push 416
 push 132
 pop
 pop
 pop
 pop
 push 201
 push 247
 push 975
 push 96
 push 161
 push 618
 push 241
 pop
 push 592
 push 364
 push 635
 push 198
 push 210
 push 347
 push 617
 push 685
 pop
 pop
 push 368
 push 524
 push 15
 pop
 push 448
 push 878
 pop
 push 352
 pop
 pop
 push 278
 push 536
 push 468
 pop
 pop
 pop
 push 612
 push 109
 push 387
 push 912
 push 369
 pop
 push 424
 push 264
 pop
 push 626
 push 978
 push 861
 push 283
 push 813
 push 959
 pop
 push 172
 push 186
 pop
 pop
 push 61
 push 323
 push 555
 push 352
 push 516
 pop
 push 47
 push 695
 pop
 push 894
 push 533
 pop
 push 888
 push 110
 push 907
 push 398
 push 556
 push 65
 push 754
 push 133
 pop
 push 407
 pop
 push 688
 push 513
 pop
 push 909
 push 567
 push 695
 push 657
 push 264
 pop
 push 707
 pop
 push 398
 push 739
 push 943
 push 445
 push 128
 push 26
 pop
 pop
 push 563
 push 649
 push 471
 pop
 pop
 pop
 push 34
 push 376
 push 870
 push 634
 pop
 push 972
 pop
 push 708
 push 604
 push 524
 push 396
 push 550
 pop
 push 588
 pop
 push 350
 push 918
 pop
 push 193
 push 384
 pop
 push 335
 push 442
 pop
 pop
 push 25
 push 212
 push 418
 pop
 push 814
 push 130
 push 970
 push 859
 pop
 push 389
 push 666
 pop
 push 47
 push 290
 push 229
 push 718
 push 933
 pop
 push 62
 pop
 pop
 push 257
 pop
 push 41
 push 627
 push 591
 push 961
 push 323
 pop
 pop
 push 629
 push 135
 pop
 pop
 push 757
 push 233
 push 748
 pop
 push 232
 pop
 push 131
 push 466
 push 352
 pop
 pop
 push 91
 pop
 push 361
 push 968
 push 642
 pop
 pop
 pop
 push 720
 push 761
 push 819
 push 730
 pop
 pop
 push 785
 pop
 push 787
 push 698
 pop
 pop
 push 555
 push 58
 push 921
 pop
 pop
 pop
 push 245
 push 988
 push 271
 push 69
 push 635
 push 4
 push 424
 pop
 pop
 push 453
 pop
 push 863
 push 251
 push 772
 push 705
 push 585
 push 353
 push 260
 pop
 pop
 push 36
 push 396
 push 358
 push 963
 push 871
 push 367
 pop
 push 478
 pop
 pop
 push 100
 pop
 pop
 push 390
 push 734
 push 772
 push 657
 push 261
 push 46
 pop
 push 820
 pop
 push 383
 push 317
 push 196
 pop
 pop
 pop
 pop
 push 936
 push 116
 pop
 push 890
 push 557
 push 64
 pop
 pop
 pop
 push 71
 push 214
 pop
 push 557
 push 389
 push 894
 push 695
 push 189
 pop
 push 840
 push 781
 push 78
 push 158
 pop
 push 600
 push 4
 push 853
 push 929
 push 556
 pop
 push 395
 push 306
 push 88
 push 391
 push 520
 push 982
 pop
 push 396
 push 257
 pop
 push 163
 pop
 pop
 pop
 push 688
 push 777
 push 153
 pop
 push 572
 push 422
 push 27
 pop
 pop
 pop
 push 912
 push 13
 pop
 push 499
 pop
 pop
 push 909
 push 944
 push 974
 push 551
 push 216
 push 575
 push 125
 pop
 push 510
 push 568
 push 485
 push 48
 push 733
 pop
 pop
 push 465
 pop
 push 393
 push 682
 push 863
 push 123
 push 153
 push 186
 push 199
 push 176
 push 223
 push 800
 pop
 push 737
 pop
 push 803
 push 988
 pop
 push 815
 pop
 push 910
 push 181
 push 836
 pop
 push 582
 push 541
 push 699
 push 333
 pop
 push 761
 push 333
 push 782
 pop
 pop
 push 93
 push 299
 push 185
 pop
 push 379
 push 117
 pop
 pop
 push 950
 push 532
 push 511
 push 801
 pop
 push 740
 push 83
 push 469
 push 284
 pop
 push 797
 push 920
 push 388
 pop
 push 188
 push 903
 push 330
 pop
 push 469
 push 113
 push 859
 pop
 pop
 push 846
 push 590
 pop
 push 778
 push 700
 push 121
 push 339
 push 219
 push 213
 push 446
 push 39
 push 968
 push 89
 pop
 push 469
 push 113
 pop
 push 40
 pop
 pop
 pop
 push 39
 pop
 push 174
 push 566
 push 431
 push 644
 pop
 push 421
 push 859
 pop
 push 326
 push 681
 push 130
 push 228
 push 233
 pop
 pop
 push 105
 push 718
 push 467
 push 661
 push 636
 push 608
 push 51
 push 202
 push 533
 push 145
 push 326
 push 439
 push 943
 push 711
 push 371
 push 919
 pop
 push 912
 pop
 pop
 pop
 push 573
 push 405
 push 178
 pop
 push 175
 push 292
 pop
 push 882
 push 695
 push 813
 pop
 push 239
 pop
 pop
 push 473
 pop
 pop
 push 597
 pop
 push 659
 push 803
 pop
 push 651
 push 641
 push 755
 pop
 pop
 pop
 pop
 push 678
 push 651
 push 36
 push 341
 push 952
 pop
 push 909
 push 18
 push 676
 push 724
 pop
 pop
 pop
 pop
 push 619
 push 91
 pop
 push 181
 pop
 pop
 pop
 pop
 push 224
 push 733
 push 855
 push 831
 push 52
 push 689
 pop
 push 161
 push 721
 push 590
 push 454
 pop
 pop
 pop
 pop
 push 628
 pop
 pop
 pop
 push 675
 pop
 push 278
 push 643
 pop
 push 818
 pop
 push 420
 push 189
 push 992
 pop
 push 930
 push 881
 pop
 push 789
 pop
 pop
 push 315
 push 661
 push 123
 push 155
 push 489
 push 162
 push 940
 push 752
 pop
 pop
 push 199
 pop
 push 374
 pop
 push 366
 push 778
 push 937
 push 765
 pop
 push 700
 push 594
 push 512
 pop
 push 229
 push 10
 push 906
 pop
 pop
 pop
 push 761
 push 428
 pop
 push 955
 push 594
 push 182
 pop
 push 453
 push 765
 pop
 push 506
 push 999
 push 371
 push 64
 push 925
 pop
 pop
 push 16
 push 837
 pop
 pop
 push 979
 push 427
 push 944
 push 851
 push 795
 pop
 pop
 push 293
 push 836
 push 763
 push 264
 pop
 push 667
 push 476
 pop
 push 584
 push 929
 push 973
 push 269
 push 121
 pop
 push 302
 push 395
 push 921
 push 895
 pop
 push 742
 pop
 pop
 pop
 push 895
 push 556
 push 346
 pop
 push 397
 push 994
 push 123
 push 567
 pop
 pop
 push 687
 push 524
 push 786
 push 597
 pop
 push 171
 pop
 pop
 push 112
 pop
 push 999
 pop
 push 583
 push 519
 push 235
 push 803
 push 148
 push 318
 pop
 push 671
 push 908
 pop
 pop
 pop
 push 76
 pop
 push 748
 push 366
 push 386
 push 300
 pop
 pop
 pop
 push 58
 push 646
 push 608
 push 582
 push 234
 pop
 push 96
 pop
 push 148
 pop
 push 815
 push 876
 push 686
 pop
 push 58
 push 567
 pop
 push 112
 pop
 pop
 pop
 push 785
 push 863
 pop
 push 32
 pop
 pop
 pop
 push 945
 push 578
 pop
 pop
 push 329
 push 743
 push 20
 push 990
 pop
 push 130
 push 939
 push 465
 pop
 pop
 push 549
 pop
 pop
 pop
 push 361
 pop
 pop
 pop
 push 896
 pop
 push 335
 push 58
 push 660
 push 397
 push 880
 push 329
 push 656
 push 344
 pop
 push 202
 push 963
 push 979
 push 298
 pop
 push 432
 push 862
 push 170
 pop
 pop
 push 950
 push 588
 pop
 push 282
 pop
 push 467
 push 993
 push 390
 push 939
 push 216
 push 984
 push 59
 push 34
 push 189
 push 366
 push 474
 pop
 push 637
 push 151
 push 774
 push 948
 push 26
 push 842
 push 86
 push 807
 push 85
 pop
 push 442
 push 160
 push 327
 push 396
 push 70
 pop
 push 169
 pop
 push 701
 push 949
 push 738
 pop
 push 247
 push 699
 pop
 push 575
 push 961
 pop
 pop
 push 994
 push 438
 push 980
 push 806
 push 294
 push 11
 push 552
 push 404
 push 317
 push 575
 push 400
 push 927
 push 253
 pop
 push 322
 push 367
 pop
 push 630
 pop
 pop
 push 655
 pop
 push 816
 push 53
 push 904
 pop
 push 14
 pop
 push 461
 pop
 push 723
 push 36
 push 784
 push 90
 push 576
 push 852
 push 223
 pop
 push 443
 push 565
 push 693
 push 729
 pop
 pop
 pop
 push 185
 pop
 push 48
 push 442
 pop
 push 891
 pop
 push 227
 pop
 push 563
 push 338
 pop
 push 829
 pop
 push 229
 pop
 push 813
 push 35
 pop
 pop
 push 901
 push 93
 push 495
 push 131
 push 593
 push 545
 pop
 push 895
 push 941
 push 872
 push 466
 pop
 push 410
 push 48
 pop
 push 97
 push 4
 push 461
 push 180
 pop
 pop
 pop
 pop
 push 664
 push 786
 push 51
 pop
 pop
 pop
 pop
 push 438
 push 224
 push 23
 push 371
 push 491
 push 821
 push 821
 pop
 push 122
 push 394
 pop
 push 436
 pop
 push 598
 push 373
 pop
 push 980
 push 478
 push 952
 pop
 push 302
 pop
 push 535
 pop
 push 374
 push 333
 pop
 pop
 push 754
 push 220
 push 639
 pop
 push 980
 push 869
 push 104
 push 963
 push 73
 push 146
 push 741
 push 258
 push 392
 push 937
 push 502
 push 157
 push 94
 push 47
 pop
 pop
 pop
 pop
 pop
 push 356
 push 269
 push 3
 push 42
 push 521
 pop
 pop
 push 351
 push 267
 push 584
 pop
 push 238
 pop
 push 953
 push 687
 push 547
 push 713
 pop
 push 886
 push 385
 push 679
 push 932
 pop
 push 425
 push 562
 pop
 pop
 push 172
 push 885
 push 261
 pop
 push 641
 push 794
 push 499
 push 741
 pop
 push 579
 push 511
 push 675
 pop
 push 355
 push 209
 push 773
 push 472
 push 220
 push 66
 push 897
 push 461
 push 140
 push 919
 push 115
 push 727
 push 630
 pop
 push 633
 push 207
 push 742
 push 864
 pop
 push 881
 pop
 pop
 push 274
 push 443
 push 936
 pop
 push 515
 pop
 push 404
 pop
 pop
 pop
 push 814
 push 64
 push 588
 push 327
 push 96
 push 900
 pop
 pop
 pop
 push 497
 pop
 push 351
 pop
 push 427
 push 756
 pop
 pop
 push 34
 push 743
 push 316
 push 821
 pop
 push 884
 push 218
 push 915
 push 354
 pop
 pop
 pop
 push 483
 push 956
 push 887
 push 188
 push 213
 push 757
 push 143
 push 930
 push 48
 pop
 push 348
 push 497
 push 108
 push 620
 push 163
 push 261
 push 922
 push 503
 pop
 push 430
 pop
 push 405
 push 472
 push 963
 push 187
 push 443
 push 961
 push 132
 push 899
 pop
 pop
 push 162
 push 771
 push 640
 pop
 push 43
 push 548
 push 233
 pop
 pop
 push 435
 push 814
 push 30
 push 852
 push 336
 push 972
 push 812
 pop
 push 669
 pop
 pop
 push 837
 pop
 push 596
 pop
 pop
 push 996
 push 988
 pop
 push 340
 pop
 push 740
 push 340
 push 108
 push 56
 push 973
 pop
 push 384
 push 872
 pop
 push 140
 push 880
 push 651
 push 496
 push 692
 push 356
 pop
 push 31
 pop
 push 574
 push 990
 push 497
 push 408
 pop
 pop
 pop
 pop
 pop
 pop
 push 314
 pop
 push 536
 pop
 push 87
 push 696
 push 656
 push 23
 push 395
 push 62
 pop
 push 45
 push 420
 pop
 push 261
 push 143
 push 590
 push 259
 pop
 pop
 pop
 push 532
 pop
 push 106
 pop
 push 495
 push 399
 pop
 push 520
 push 791
 push 388
 push 488
 push 770
 push 244
 push 669
 push 185
 push 722
 pop
 pop
 pop
 push 247
 push 24
 push 419
 pop
 push 75
 push 124
 pop
 pop
 push 747
 push 857
 push 17
 push 910
 pop
 push 762
 pop
 pop
 pop
 pop
 push 533
 pop
 pop
 push 590
 push 672
 push 920
 push 88
 push 20
 push 329
 push 742
 push 640
 pop
 push 533
 push 934
 pop
 pop
 push 417
 push 824
 pop
 pop
 push 950
 pop
 push 656
 push 706
 pop
 pop
 push 530
 push 179
 push 644
 pop
 pop
 push 261
 push 671
 pop
 push 558
 push 47
 push 501
 pop
 push 523
 push 548
 push 375
 pop
 push 27
 push 427
 pop
 pop
 pop
 push 804
 push 78
 pop
 push 987
 pop
 pop
 push 670
 push 565
 pop
 push 982
 push 814
 pop
 push 131
 pop
 pop
 push 109
 push 487
 pop
 pop
 push 33
 push 753
 pop
 push 506
 push 830
 pop
 push 879
 push 12
 push 704
 push 688
 push 918
 pop
 push 866
 push 40
 push 331
 push 846
 pop
 push 728
 push 837
 pop
 pop
 push 609
 push 379
 pop
 pop
 pop
 push 54
 pop
 pop
 push 906
 push 508
 push 56
 pop
 push 243
 push 491
 pop
 push 37
 push 727
 pop
 pop
 push 895
 push 91
 pop
 pop
 pop
 push 204
 push 724
 pop
 push 385
 pop
 push 572
 pop
 push 135
 push 367
 push 617
 push 581
 push 422
 push 492
 push 369
 push 681
 pop
 push 302
 pop
 push 974
 push 796
 push 484
 push 290
 push 689
 push 401
 push 931
 push 439
 pop
 push 995
 push 696
 push 446
 push 395
 push 306
 pop
 push 902
 pop
 pop
 pop
 push 679
 push 5
 push 70
 pop
 push 413
 push 945
 push 777
 pop
 push 328
 push 26
 pop
 pop
 push 1
 pop
 pop
 pop
 pop
 push 2
 push 236
 push 246
 pop
 push 170
 pop
 pop
 push 349
 push 680
 push 976
 pop
 push 878
 push 724
 push 190
 push 959
 push 983
 push 980
 push 178
 push 91
 pop
 pop
 push 266
 push 2
 push 343
 push 103
 pop
 push 539
 push 425
 push 989
 pop
 push 335
 push 637
 push 595
 push 961
 pop
 pop
 pop
 push 889
 pop
 push 111
 pop
 push 700
 push 522
 pop
 push 176
 push 893
 pop
 pop
 push 78
 push 669
 push 969
 push 2
 push 100
 pop
 pop
 pop
 push 546
 push 959
 push 258
 pop
 pop
 push 25
 push 646
 push 220
 push 998
 push 351
 push 708
 push 842
 push 474
 push 265
 pop
 pop
 push 108
 push 503
 pop
 push 668
 push 108
 push 776
 pop
 push 491
 push 854
 push 952
 push 749
 push 44
 push 128
 push 769
 pop
 pop
 pop
 push 735
 pop
 push 443
 push 675
 push 319
 push 653
 push 638
 pop
 push 513
 pop
 pop
 push 569
 push 285
 push 916
 push 993
 push 718
 pop
 push 544
 push 93
 push 981
 pop
 push 225
 push 648
 push 165
 pop
 pop
 pop
 push 824
 push 856
 pop
 push 917
 pop
 push 27
 pop
 push 9
 push 294
 push 875
 push 420
 push 826
 push 329
 pop
 push 583
 push 123
 push 578
 push 541
 push 873
 push 85
 pop
 pop
 pop
 push 645
 push 344
 pop
 push 737
 pop
 push 173
 pop
 pop
 push 952
 pop
 push 324
 push 50
 pop
 pop
 push 360
 push 529
 pop
 push 238
 pop
 pop
 push 578
 pop
 push 681
 push 257
 push 531
 push 33
 push 69
 push 253
 pop
 pop
 pop
 pop
 pop
 push 762
 push 845
 push 310
 push 431
 push 65
 pop
 push 42
 pop
 pop
 push 974
 push 144
 push 769
 pop
 push 927
 pop
 pop
 push 851
 push 700
 push 886
 push 170
 pop
 pop
 pop
 pop
 push 455
 push 806
 pop
 pop
 push 786
 pop
 pop
 pop
 push 175
 push 529
 push 858
 push 11
 push 886
 push 353
 push 328
 push 277
 push 605
 pop
 push 239
 push 134
 pop
 pop
 pop
 push 186
 push 228
 pop
 push 752
 pop
 push 450
 push 755
 push 646
 push 233
 push 237
 pop
 pop
 push 788
 pop
 pop
 push 245
 push 846
 push 734
 pop
 push 924
 push 40
 push 147
 push 298
 push 981
 push 12
 push 256
 pop
 push 534
 push 118
 pop
 push 836
 push 705
 pop
 push 852
 push 960
 push 960
 push 575
 push 805
 pop
 pop
 push 432
 pop
 push 109
 push 234
 push 921
 pop
 pop
 pop
 pop
 pop
 pop
 push 305
 push 337
 pop
 push 808
 pop
 push 338
 pop
 pop
 push 844
 push 365
 push 625
 pop
 pop
 pop
 push 867
 pop
 push 442
 push 703
 push 960
 pop
 pop
 push 606
 pop
 pop
 pop
 push 107
 push 255
 pop
 push 927
 pop
 pop
 pop
 push 349
 push 235
 push 556
 push 852
 pop
 pop
 push 959
 pop
 push 898
 push 253
 pop
 pop
 push 643
 pop
 push 584
 push 923
 push 254
 push 983
 push 886
 pop
 push 900
 push 806
 push 390
 push 971
 push 818
 push 949
 pop
 push 769
 pop
 pop
 push 131
 push 892
 push 446
 push 607
 push 218
 push 937
 pop
 push 577
 push 904
 pop
 push 190
 pop
 pop
 push 477
 push 503
 push 544
 push 436
 push 961
 push 681
 push 552
 push 644
 push 52
 push 501
 pop
 push 307
 push 738
 push 588
 pop
 push 360
 push 134
 push 433
 push 311
 push 462
 pop
 push 457
 push 505
 pop
 pop
 push 166
 push 929
 push 504
 push 61
 pop
 pop
 push 717
 push 548
 pop
 push 979
 push 790
 push 850
 pop
 pop
 push 505
 push 220
 push 577
 push 242
 pop
 pop
 push 808
 push 311
 push 338
 pop
 push 862
 pop
 pop
 push 185
 push 75
 push 348
 pop
 push 988
 pop
 push 338
 pop
 push 942
 pop
 pop
 pop
 push 981
 pop
 push 690
 push 394
 push 981
 push 404
 push 227
 push 129
 push 523
 push 450
 push 78
 push 404
 push 121
 push 557
 push 700
 pop
 push 581
 pop
 push 126
 push 418
 push 990
 pop
 push 900
 pop
 push 990
 push 451
 push 246
 push 781
 push 95
 pop
 push 97
 pop
 push 287
 pop
 push 890
 push 678
 push 104
 pop
 push 211
 push 255
 push 303
 pop
 pop
 pop
 push 521
 push 599
 push 254
 push 455
 push 42
 push 85
 push 8
 push 686
 push 480
 push 493
 push 938
 push 200
 push 927
 push 864
 pop
 pop
 pop
 push 32
 pop
 pop
 pop
 pop
 push 105
 push 879
 push 768
 push 672
 pop
 push 95
 push 523
 push 612
 push 146
 push 309
 push 482
 push 564
 push 953
 push 655
 push 967
 pop
 push 997
 push 958
 push 444
 pop
 push 873
 push 881
 push 486
 pop
 pop
 push 659
 pop
 pop
 push 176
 pop
 push 59
 push 995
 push 589
 pop
 pop
 push 600
 push 192
 push 252
 push 693
 push 941
 pop
 pop
 push 527
 pop
 push 382
 push 814
 pop
 push 832
 pop
 push 878
 push 189
 pop
 push 68
 pop
 pop
 pop
 push 377
 pop
 push 81
 pop
 push 62
 pop
 push 737
 push 508
 push 533
 push 90
 pop
 push 254
 push 555
 pop
 pop
 push 632
 pop
 push 942
 pop
 pop
 push 556
 pop
 pop
 push 502
 push 367
 pop
 push 866
 push 729
 push 98
 push 522
 pop
 push 70
 push 871
 pop
 push 478
 pop
 push 726
 push 169
 push 298
 push 688
 push 637
 pop
 push 194
 pop
 push 673
 pop
 push 600
 pop
 push 711
 pop
 pop
 push 669
 push 141
 pop
 push 151
 pop
 pop
 pop
 pop
 push 681
 push 190
 push 632
 pop
 push 663
 push 59
 push 616
 pop
 pop
 push 909
 push 151
 pop
 push 887
 push 411
 push 519
 pop
 push 710
 push 148
 pop
 pop
 pop
 push 189
 pop
 push 144
 push 44
 push 391
 pop
 push 896
 push 406
 push 564
 pop
 pop
 push 445
 push 453
 push 967
 push 272
 push 500
 pop
 pop
 pop
 push 288
 push 906
 pop
 push 599
 push 721
 push 855
 push 842
 push 48
 push 23
 push 851
 push 102
 push 982
 pop
 push 419
 push 526
 push 892
 push 848
 push 73
 push 226
 push 538
 push 679
 push 152
 pop
 push 327
 pop
 pop
 push 590
 pop
 push 74
 pop
 pop
 pop
 push 988
 pop
 push 327
 pop
 push 503
 pop
 push 512
 push 939
 push 30
 push 956
 pop
 push 302
 push 620
 pop
 pop
 pop
 push 604
 pop
 push 282
 push 879
 push 733
 pop
 pop
 pop
 push 606
 pop
 push 727
 push 465
 push 992
 push 889
 push 202
 pop
 pop
 pop
 push 743
 pop
 pop
 push 766
 pop
 push 979
 push 432
 push 340
 push 266
 push 654
 pop
 push 422
 push 737
 push 489
 push 923
 push 835
 push 510
 push 386
 push 974
 push 192
 push 523
 push 577
 push 550
 push 138
 pop
 push 173
 pop
 push 444
 push 241
 pop
 push 380
 push 993
 pop
 push 908
 pop
 pop
 push 791
 push 220
 push 277
 push 863
 push 929
 push 468
 pop
 push 237
 push 85
 pop
 push 263
 pop
 pop
 push 603
 push 97
 push 727
 push 526
 push 165
 push 40
 push 308
 push 288
 push 238
 push 333
 pop
 pop
 push 351
 push 771
 pop
 pop
 push 360
 push 13
 push 46
 push 506
 pop
 push 133
 push 483
 push 885
 pop
 push 678
 push 282
 push 792
 push 440
 pop
 push 89
 push 993
 pop
 push 895
 push 941
 push 997
 pop
 push 451
 pop
 pop
 push 321
 push 552
 pop
 push 177
 pop
 push 289
 push 916
 push 125
 pop
 pop
 push 176
 pop
 push 413
 pop
 push 914
 push 140
 push 809
 pop
 push 261
 push 515
 push 210
 pop
 push 479
 push 186
 push 364
 pop
 pop
 push 104
 push 870
 push 326
 pop
 push 443
 pop
 push 923
 push 980
 push 816
 pop
 pop
 push 236
 push 769
 push 284
 pop
 pop
 push 512
 push 477
 pop
 push 918
 push 520
 pop
 push 622
 push 929
 push 134
 pop
 push 234
 push 995
 push 890
 push 989
 pop
 pop
 push 886
 push 538
 push 979
 push 768
 push 940
 push 335
 pop
 push 699
 push 839
 push 928
 pop
 push 354
 pop
 push 270
 push 591
 push 656
 pop
 push 305
 push 132
 push 327
 pop
 push 310
 push 551
 push 366
 pop
 pop
 push 828
 pop
 push 213
 push 705
 push 511
 pop
 pop
 push 265
 push 935
 pop
 push 174
 push 890
 push 912
 push 676
 push 630
 push 530
 push 294
 pop
 push 30
 push 457
 push 881
 pop
 push 223
 pop
 push 487
 push 756
 push 819
 pop
 push 426
 push 714
 push 952
 push 637
 pop
 push 696
 push 764
 push 257
 push 837
 pop
 push 11
 push 397
 push 676
 push 351
 push 227
 pop
 pop
 push 596
 push 218
 pop
 pop
 pop
 pop
 push 573
 push 677
 push 135
 pop
 push 242
 push 824
 push 151
 push 521
 push 231
 push 470
 push 690
 pop
 push 893
 push 269
 push 179
 pop
 pop
 push 272
 push 803
 pop
 push 704
 push 916
 push 819
 push 615
 push 823
 push 769
 pop
 push 44
 push 496
 push 321
 push 987
 push 899
 pop
 push 166
 pop
 pop
 push 647
 push 735
 pop
 push 181
 pop
 push 317
 pop
 push 268
 push 795
 push 457
 pop
 push 354
 push 930
 push 332
 push 627
 push 643
 push 600
 push 620
 push 769
 pop
 push 799
 push 717
 push 934
 pop
 pop
 push 464
 push 248
 push 85
 push 119
 push 100
 push 938
 pop
 push 996
 pop
 push 983
 push 51
 pop
 push 844
 pop
 push 17
 pop
 pop
 push 992
 pop
 push 572
 pop
 pop
 pop
 push 778
 push 793
 push 827
 push 240
 push 596
 pop
 pop
 push 714
 push 864
 push 970
 push 478
 push 941
 push 851
 pop
 pop
 push 51
 push 121
 pop
 push 351
 push 140
 push 839
 push 255
 push 986
 push 535
 push 826
 push 308
 pop
 push 208
 push 153
 pop
 push 191
 push 516
 push 178
 pop
 push 627
 pop
 push 495
 pop
 pop
 pop
 push 757
 push 943
 pop
 pop
 push 481
 push 530
 pop
 pop
 pop
 push 912
 pop
 push 752
 pop
 pop
 push 182
 push 803
 pop
 push 20
 pop
 pop
 push 112
 pop
 push 757
 pop
 pop
 push 780
 push 476
 push 464
 push 237
 pop
 push 344
 push 433
 push 94
 pop
 pop
 push 142
 push 640
 push 181
 push 905
 pop
 push 770
 push 211
 pop
 pop
 push 441
 push 926
 push 31
 push 321
 pop
 pop
 pop
 pop
 pop
 pop
 push 846
 push 708
 push 373
 pop
 push 705
 pop
 pop
 pop
 pop
 pop
 pop
 push 855
 push 728
 push 174
 pop
 pop
 push 910
 pop
 pop
 push 361
 pop
 push 299
 push 432
 push 907
 push 965
 push 156
 push 761
 pop
 push 542
 push 730
 push 32
 push 381
 push 891
 pop
 pop
 pop
 push 837
 pop
 pop
 pop
 push 286
 push 227
 push 841
 push 94
 push 570
 pop
 pop
 pop
 push 0
 pop
 push 86
 push 692
 pop
 pop
 push 799
 push 22
 push 73
 push 662
 pop
 pop
 pop
 push 217
 push 935
 pop
 push 217
 push 532
 push 371
 push 387
 pop
 push 135
 push 348
 push 107
 pop
 push 645
 push 255
 push 676
 pop
 push 242
 push 336
 pop
 pop
 pop
 push 584
 push 624
 pop
 push 452
 pop
 push 578
 push 688
 push 594
 pop
 pop
 pop
 pop
 pop
 push 49
 push 984
 push 485
 pop
 push 599
 push 365
 pop
 push 637
 push 253
 push 225
 push 886
 push 719
 push 896
 push 938
 push 733
 push 899
 push 958
 push 445
 pop
 pop
 push 561
 push 68
 push 130
 pop
 push 88
 push 658
 pop
 push 988
 push 400
 push 146
 push 566
 push 276
 pop
 pop
 push 62
 push 746
 push 560
 push 579
 push 104
 pop
 push 221
 push 569
 pop
 pop
 push 240
 push 701
 push 229
 push 341
 push 707
 push 635
 pop
 push 141
 pop
 push 385
 push 384
 push 395
 push 182
 pop
 pop
 push 950
 pop
 pop
 push 830
 push 600
 push 789
 push 161
 pop
 push 608
 push 146
 push 783
 push 979
 pop
 push 655
 pop
 pop
 push 178
 pop
 push 343
 push 35
 push 201
 push 691
 pop
 pop
 push 134
 push 340
 push 784
 push 780
 pop
 push 25
 push 514
 push 388
 push 428
 push 764
 pop
 push 463
 push 513
 push 667
 push 672
 push 95
 push 971
 push 177
 push 490
 push 326
 pop
 push 169
 pop
 pop
 push 140
 push 37
 pop
 push 893
 push 280
 pop
 push 725
 push 962
 push 318
 pop
 push 459
 push 157
 push 942
 pop
 push 746
 push 280
 push 583
 push 87
 push 893
 push 193
 push 304
 pop
 push 499
 push 43
 push 132
 pop
 push 513
 push 605
 pop
 push 832
 pop
 pop
 push 86
 push 152
 push 860
 push 818
 pop
 pop
 push 472
 push 842
 pop
 push 77
 push 651
 push 712
 pop
 push 895
 pop
 push 127
 pop
 push 560
 pop
 push 800
 push 217
 push 351
 pop
 push 254
 push 498
 push 311
 push 923
 push 251
 push 133
 push 636
 push 858
 push 21
 push 48
 push 359
 pop
 push 132
 push 627
 pop
 pop
 push 339
 push 37
 pop
 push 102
 push 489
 push 910
 push 431
 pop
 push 862
 push 512
 pop
 push 562
 push 482
 push 34
 pop
 pop
 push 950
 pop
 push 342
 push 498
 pop
 push 985
 push 990
 pop
 push 395
 pop
 push 250
 pop
 pop
 pop
 push 63
 pop
 push 463
 pop
 push 178
 push 664
 pop
 push 619
 push 200
 pop
 push 565
 pop
 push 657
 push 74
 pop
 pop
 pop
 pop
 push 62
 push 604
 push 685
 push 881
 push 951
 pop
 pop
 pop
 push 255
 pop
 push 947
 push 444
 push 822
 push 83
 push 862
 push 687
 push 699
 push 96
 push 349
 push 956
 push 998
 pop
 push 378
 push 914
 push 359
 pop
 push 613
 push 568
 push 292
 pop
 push 192
 push 562
 pop
 push 651
 push 510
 pop
 push 889
 pop
 push 427
 push 48
 push 158
 push 671
 push 763
 pop
 pop
 push 254
 push 112
 push 845
 push 574
 push 27
 push 835
 push 784
 push 996
 pop
 push 900
 pop
 push 556
 pop
 push 993
 push 861
 pop
 push 643
 push 163
 push 104
 pop
 push 353
 push 194
 pop
 push 589
 push 537
 push 880
 push 167
 push 518
 push 268
 pop
 push 239
 pop
 pop
 push 384
 push 611
 push 276
 push 775
 push 605
 push 208
 pop
 push 76
 push 280
 pop
 pop
 pop
 push 609
 push 965
 pop
 push 831
 push 684
 pop
 pop
 push 200
 push 759
 pop
 push 335
 pop
 push 38
 pop
 push 337
 push 378
 pop
 pop
 push 797
 push 783
 pop
 push 545
 pop
 push 714
 pop
 push 864
 push 902
 push 628
 pop
 push 220
 pop
 pop
 pop
 push 56
 push 268
 pop
 push 528
 push 59
 push 43
 pop
 push 63
 push 181
 push 490
 pop
 push 537
 pop
 push 699
 push 285
 push 324
 push 413
 push 641
 push 812
 pop
 pop
 push 248
 push 793
 pop
 push 692
 push 789
 push 678
 pop
 push 699
 push 264
 push 750
 push 169
 pop
 pop
 pop
 push 944
 push 342
 push 588
 push 861
 pop
 push 851
 push 957
 push 234
 push 971
 pop
 push 325
 push 169
 push 740
 push 827
 pop
 push 82
 pop
 pop
 push 999
 push 558
 pop
 push 652
 push 614
 pop
 pop
 pop
 push 122
 pop
 pop
 pop
 push 636
 push 814
 pop
 push 562
 push 702
 push 632
 push 715
 push 438
 push 248
 push 688
 push 462
 push 76
 pop
 push 75
 pop
 push 690
 pop
 pop
 push 147
 push 600
 pop
 push 941
 push 135
 pop
 push 37
 push 417
 pop
 pop
 push 649
 push 842
 push 25
 push 13
 push 546
 push 484
 push 114
 push 994
 pop
 push 383
 push 369
 pop
 pop
 pop
 push 898
 push 971
 push 382
 push 684
 push 241
 pop
 push 564
 pop
 push 62
 pop
 push 515
 push 187
 pop
 push 879
 pop
 push 727
 push 421
 push 301
 pop
 pop
 push 36
 push 110
 push 166
 push 674
 push 169
 pop
 pop
 push 637
 push 10
 pop
 pop
 pop
 pop
 push 368
 push 934
 pop
 push 695
 push 213
 push 65
 push 580
 push 981
 push 906
 push 825
 pop
 pop
 push 22
 pop
 push 609
 pop
 push 776
 push 907
 pop
 push 660
 pop
 pop
 pop
 push 295
 push 409
 push 199
 push 362
 pop
 push 117
 pop
 push 488
 pop
 push 290
 push 638
 pop
 pop
 push 284
 pop
 push 586
 push 67
 pop
 pop
 push 436
 push 66
 push 783
 push 204
 push 284
 push 444
 push 625
 push 141
 pop
 push 141
 pop
 pop
 pop
 push 155
 pop
 push 535
 pop
 push 823
 push 559
 push 422
 push 992
 push 304
 pop
 push 679
 push 479
 push 164
 push 216
 pop
 push 770
 push 328
 push 516
 pop
 push 536
 pop
 pop
 push 377
 push 956
 push 633
 push 573
 push 328
 push 330
 push 59
 push 399
 push 545
 push 129
 pop
 pop
 pop
 push 959
 push 535
 push 160
 pop
 push 104
 push 406
 pop
 push 864
 pop
 push 17
 pop
 pop
 push 190
 push 989
 pop
 push 178
 push 169
 push 179
 pop
 pop
 push 516
 push 172
 push 162
 push 765
 push 647
 push 236
 pop
 push 633
 push 129
 push 887
 push 394
 push 743
 push 345
 push 56
 push 364
 push 771
 push 139
 push 73
 pop
 push 20
 push 550
 push 454
 push 918
 pop
 push 599
 push 872
 pop
 push 67
 push 915
 push 469
 pop
 pop
 pop
 pop
 push 626
 push 710
 pop
 pop
 pop
 push 381
 pop
 push 640
 push 504
 push 452
 pop
 push 679
 push 987
 push 242
 push 847
 push 8
 push 610
 pop
 push 664
 push 500
 push 796
 push 716
 push 591
 push 796
 push 813
 pop
 pop
 push 267
 pop
 push 575
 pop
 push 654
 push 856
 push 494
 push 231
 pop
 pop
 push 953
 push 479
 pop
 push 243
 pop
 push 562
 push 103
 pop
 push 714
 push 728
 pop
 push 312
 push 116
 push 909
 pop
 pop
 push 704
 pop
 push 401
 pop
 pop
 push 760
 push 398
 pop
 push 971
 push 981
 pop
 push 988
 push 317
 pop
 pop
 push 511
 push 318
 push 709
 push 353
 push 565
 push 984
 push 371
 pop
 push 379
 push 249
 push 711
 push 397
 pop
 push 357
 push 372
 push 289
 push 723
 push 779
 pop
 pop
 pop
 pop
 push 552
 push 170
 pop
 push 464
 pop
 push 508
 push 672
 push 292
 push 960
 pop
 push 255
 pop
 pop
 push 149
 pop
 pop
 push 231
 pop
 pop
 push 249
 push 488
 push 80
 push 846
 pop
 push 216
 push 819
 push 795
 push 933
 push 797
 push 474
 pop
 push 563
 pop
 push 429
 push 581
 pop
 push 278
 push 801
 pop
 pop
 pop
 push 937
 push 134
 push 448
 push 634
 pop
 push 756
 push 423
 pop
 pop
 pop
 pop
 pop
 push 574
 push 307
 push 329
 pop
 push 8
 push 719
 push 678
 push 457
 push 277
 pop
 pop
 push 150
 push 250
 push 715
 pop
 pop
 push 655
 push 115
 push 72
 pop
 pop
 push 299
 push 659
 pop
 push 944
 push 542
 pop
 push 899
 push 47
 push 297
 pop
 push 609
 push 39
 pop
 push 811
 push 100
 push 615
 push 318
 push 267
 pop
 push 187
 push 884
 push 808
 push 395
 push 170
 push 390
 push 814
 push 981
 push 599
 pop
 push 472
 push 892
 pop
 push 200
 pop
 push 921
 push 270
 pop
 pop
 pop
 pop
 pop
 push 458
 push 869
 pop
 push 25
 pop
 pop
 push 40
 push 59
 pop
 pop
 push 40
 push 973
 push 136
 pop
 push 704
 push 923
 pop
 push 322
 pop
 pop
 push 191
 pop
 push 109
 pop
 pop
 push 996
 pop
 push 235
 pop
 push 18
 pop
 push 652
 push 394
 push 647
 push 814
 pop
 push 451
 push 795
 push 53
 pop
 push 236
 pop
 push 620
 push 472
 push 156
 push 443
 push 162
 push 346
 push 782
 push 157
 push 514
 push 975
 push 479
 pop
 push 487
 pop
 push 829
 push 992
 push 590
 push 493
 push 715
 push 792
 push 819
 push 164
 pop
 pop
 pop
 push 817
 push 519
 push 633
 pop
 pop
 push 385
 push 52
 pop
 pop
 pop
 pop
 push 665
 push 83
 push 468
 push 846
 push 618
 pop
 push 583
 push 772
 push 921
 push 492
 push 126
 pop
 push 417
 push 377
 push 178
 pop
 push 304
 push 530
 pop
 push 860
 pop
 push 599
 push 560
 pop
 pop
 push 243
 push 99
 pop
 push 445
 push 303
 push 971
 push 779
 pop
 push 738
 push 151
 push 964
 push 154
 pop
 push 272
 pop
 pop
 pop
 push 105
 push 472
 push 862
 push 982
 pop
 push 818
 pop
 push 20
 push 292
 push 97
 pop
 pop
 pop
 push 548
 pop
 push 376
 pop
 pop
 pop
 pop
 push 99
 push 262
 pop
 pop
 push 587
 push 531
 push 279
 pop
 push 664
 push 894
 push 451
 push 175
 push 901
 push 209
 push 878
 push 747
 pop
 pop
 push 621
 push 880
 pop
 pop
 push 149
 pop
 push 339
 push 320
 push 51
 push 645
 push 270
 pop
 push 573
 push 685
 push 616
 push 399
 push 751
 pop
 push 883
 push 380
 push 7
 push 686
 pop
 push 2
 push 183
 push 329
 pop
 pop
 push 557
 push 474
 push 781
 push 954
 push 145
 pop
 push 248
 pop
 push 65
 push 175
 push 977
 push 474
 pop
 pop
 push 864
 pop
 push 46
 pop
 push 912
 pop
 push 67
 pop
 pop
 push 577
 push 947
 pop
 push 783
 push 42
 push 3
 push 396
 push 551
 push 753
 push 474
 pop
 push 136
 pop
 pop
 push 693
 push 314
 push 791
 push 886
 pop
 push 761
 pop
 push 356
 push 631
 push 431
 push 644
 pop
 push 43
 push 714
 push 997
 push 929
 push 634
 push 295
 push 295
 push 800
 pop
 push 347
 push 282
 push 401
 push 648
 push 734
 pop
 push 451
 pop
 push 978
 push 439
 push 147
 push 528
 pop
 push 449
 pop
 pop
 push 355
 pop
 pop
 push 392
 push 937
 pop
 push 946
 pop
 pop
 push 696
 push 196
 push 37
 push 129
 push 779
 push 365
 pop
 pop
 push 878
 push 441
 push 363
 pop
 push 77
 pop
 push 825
 pop
 push 784
 pop
 push 547
 push 982
 push 791
 pop
 pop
 push 185
 push 63
 push 193
 push 363
 push 778
 push 738
 pop
 pop
 push 758
 push 918
 push 502
 push 204
 pop
 push 340
 push 209
 pop
 push 976
 pop
 pop
 pop
 push 271
 push 873
 pop
 push 373
 push 563
 push 644
 pop
 pop
 push 675
 push 520
 push 278
 pop
 push 280
 push 612
 push 786
 push 313
 pop
 pop
 push 348
 push 744
 pop
 pop
 push 25
 push 14
 pop
 pop
 push 595
 push 375
 pop
 push 733
 push 951
 pop
 push 419
 push 247
 push 669
 push 638
 push 809
 pop
 push 735
 pop
 push 803
 push 359
 pop
 pop
 push 463
 pop
 pop
 push 67
 push 804
 push 777
 push 66
 pop
 push 756
 push 959
 push 468
 push 476
 push 771
 push 714
 push 804
 push 270
 push 154
 push 173
 push 895
 push 820
 push 186
 push 814
 pop
 push 795
 push 178
 push 137
 push 673
 push 406
 pop
 pop
 push 565
 pop
 push 21
 push 481
 pop
 push 471
 pop
 push 348
 pop
 pop
 pop
 pop
 push 271
 pop
 push 197
 pop
 push 560
 push 478
 push 164
 push 130
 push 201
 push 980
 pop
 push 901
 pop
 pop
 pop
 push 446
 pop
 pop
 push 921
 pop
 push 105
 push 792
 push 890
 push 495
 push 131
 pop
 pop
 push 440
 push 899
 push 570
 pop
 push 973
 push 635
 push 51
 pop
 pop
 push 923
 push 203
 pop
 pop
 push 652
 push 959
 push 794
 pop
 pop
 push 196
 pop
 push 476
 pop
 push 378
 pop
 push 855
 pop
 push 308
 push 551
 pop
 pop
 push 942
 pop
 push 649
 pop
 pop
 push 2
 pop
 push 864
 pop
 push 77
 push 967
 push 958
 push 349
 pop
 pop
 push 927
 push 429
 push 799
 push 187
 push 443
 push 189
 push 355
 push 109
 push 916
 push 702
 push 450
 push 34
 push 137
 pop
 push 125
 push 458
 push 755
 pop
 push 971
 push 364
 push 444
 push 387
 pop
 push 800
 push 339
 push 998
 pop
 push 18
 push 229
 pop
 pop
 pop
 pop
 push 811
 pop
 push 333
 pop
 push 863
 push 940
 pop
 push 999
 push 661
 push 772
 pop
 push 407
 push 135
 push 772
 push 468
 push 687
 push 791
 push 687
 push 394
 push 588
 push 302
 push 8
 push 332
 push 479
 push 778
 pop
 pop
 push 466
 push 941
 push 555
 pop
 push 732
 pop
 pop
 push 84
 push 583
 pop
 push 928
 pop
 push 663
 push 315
 push 674
 pop
 pop
 push 938
 pop
 pop
 push 410
 push 577
 push 728
 pop
 push 593
 pop
 pop
 push 651
 push 256
 pop
 push 386
 push 105
 push 464
 push 583
 push 178
 pop
 pop
 push 177
 push 584
 pop
 pop
 push 625
 push 594
 push 253
 push 382
 push 785
 pop
 push 615
 pop
 push 240
 pop
 pop
 push 830
 push 756
 pop
 pop
 push 648
 push 930
 pop
 push 729
 push 414
 pop
 push 821
 push 591
 pop
 pop
 push 461
 push 413
 push 917
 push 149
 push 9
 push 72
 pop
 push 271
 pop
 pop
 pop
 push 445
 push 91
 pop
 pop
 push 835
 pop
 push 246
 pop
 push 957
 push 333
 pop
 pop
 pop
 push 18
 push 649
 push 412
 push 46
 pop
 push 43
 push 668
 pop
 push 318
 push 303
 push 359
 push 811
 pop
 push 513
 pop
 pop
 pop
 push 822
 pop
 push 887
 pop
 pop
 push 363
 pop
 push 778
 push 947
 push 226
 pop
 push 953
 push 595
 push 530
 pop
 push 795
 push 734
 push 381
 push 209
 pop
 push 982
 pop
 push 661
 push 582
 push 633
 push 871
 push 694
 pop
 push 509
 push 278
 pop
 pop
 push 995
 push 460
 push 62
 push 38
 push 273
 push 423
 push 702
 push 760
 pop
 push 622
 push 759
 push 84
 pop
 pop
 push 852
 push 327
 push 596
 pop
 push 115
 pop
 push 107
 push 333
 push 220
 push 184
 push 721
 push 203
 pop
 push 403
 push 701
 push 975
 push 775
 push 922
 push 848
 pop
 pop
 push 57
 pop
 push 241
 push 191
 pop
 push 840
 pop
 push 839
 push 177
 pop
 push 38
 pop
 push 849
 push 840
 push 615
 pop
 pop
 push 863
 push 675
 push 632
 pop
 push 181
 push 398
 push 774
 push 891
 push 785
 push 685
 push 652
 push 690
 push 424
 push 948
 push 936
 pop
 pop
 pop
 push 753
 push 668
 push 106
 push 488
 pop
 pop
 pop
 push 255
 push 479
 push 0
 pop
 pop
 push 667
 pop
 pop
 push 450
 push 477
 pop
 push 595
 push 932
 push 667
 push 822
 pop
 push 54
 push 936
 pop
 push 663
 push 713
 pop
 push 342
 push 792
 push 990
 push 255
 push 168
 push 544
 pop
 pop
 push 157
 pop
 push 217
 push 672
 push 633
 push 624
 push 467
 pop
 pop
 pop
 push 493
 pop
 push 179
 pop
 pop
 pop
 pop
 push 882
 push 813
 pop
 push 101
 push 688
 push 357
 push 471
 push 208
 push 760
 push 358
 pop
 pop
 pop
 push 800
 pop
 push 237
 push 575
 push 530
 push 222
 push 79
 push 828
 push 637
 push 491
 push 359
 pop
 pop
 push 71
 push 639
 push 774
 pop
 push 996
 push 551
 pop
 push 251
 push 430
 push 981
 push 864
 pop
 pop
 push 38
 pop
 pop
 push 118
 pop
 pop
 pop
 push 677
 pop
 push 233
 push 286
 pop
 pop
 push 819
 push 50
 pop
 pop
 pop
 push 138
 pop
 push 841
 pop
 pop
 push 192
 pop
 push 587
 push 242
 push 583
 push 678
 pop
 pop
 pop
 push 751
 pop
 push 26
 push 518
 pop
 push 515
 push 143
 push 951
 push 89
 pop
 push 952
 push 265
 pop
 pop
 pop
 push 189
 push 602
 push 741
 push 399
 push 789
 push 200
 pop
 push 16
 pop
 push 204
 push 822
 pop
 pop
 pop
 push 929
 push 705
 pop
 push 872
 push 294
 push 451
 push 26
 push 312
 push 368
 pop
 pop
 push 731
 push 771
 push 753
 push 911
 push 982
 push 111
 push 610
 push 401
 pop
 push 982
 push 464
 push 873
 push 895
 push 829
 push 672
 pop
 push 754
 push 150
 pop
 push 418
 push 804
 push 700
 push 938
 push 835
 push 206
 pop
 push 308
 pop
 push 570
 push 605
 pop
 push 298
 push 604
 push 57
 pop
 pop
 push 677
 pop
 pop
 push 149
 push 752
 pop
 push 938
 pop
 pop
 push 84
 pop
 push 405
 pop
 push 89
 pop
 push 136
 push 829
 pop
 pop
 push 675
 push 996
 push 89
 pop
 push 322
 push 866
 pop
 push 187
 push 130
 pop
 push 102
 push 954
 pop
 pop
 push 918
 push 5
 push 365
 push 110
 pop
 pop
 pop
 pop
 push 212
 push 724
 pop
 pop
 push 637
 pop
 pop
 pop
 push 645
 push 712
 push 565
 push 46
 push 576
 pop
 push 218
 pop
 pop
 push 166
 pop
 pop
 push 779
 push 431
 pop
 pop
 pop
 push 851
 push 639
 push 508
 pop
 push 630
 pop
 pop
 pop
 push 529
 pop
 pop
 push 318
 pop
 push 82
 push 6
 push 394
 push 198
 push 903
 push 749
 push 65
 push 456
 pop
 push 781
 pop
 push 174
 pop
 push 136
 push 817
 push 493
 push 359
 push 880
 pop
 push 275
 push 760
 push 724
 push 916
 push 747
 push 73
 push 800
 push 576
 push 774
 push 237
 push 914
 push 428
 push 328
 push 900
 push 898
 pop
 push 135
 pop
 pop
 pop
 pop
 push 473
 push 639
 push 540
 pop
 push 935
 push 861
 pop
 pop
 push 890
 push 261
 push 555
 push 176
 push 446
 pop
 push 977
 push 590
 pop
 pop
 push 965
 push 311
 push 360
 push 125
 push 120
 push 178
 push 996
 push 296
 pop
 push 83
 push 123
 push 30
 pop
 pop
 push 568
 push 258
 pop
 pop
 push 277
 pop
 push 276
 push 831
 push 463
 pop
 push 117
 push 391
 pop
 push 730
 push 813
 pop
 pop
 push 233
 push 996
 pop
 pop
 push 200
 pop
 push 432
 pop
 push 815
 push 465
 pop
 push 462
 push 619
 push 510
 pop
 push 278
 push 358
 pop
 push 439
 pop
 push 772
 push 101
 push 985
 push 609
 push 274
 push 669
 pop
 pop
 push 387
 push 201
 push 96
 pop
 push 681
 push 450
 push 676
 pop
 push 685
 pop
 push 518
 push 391
 push 204
 pop
 pop
 push 329
 pop
 pop
 push 963
 pop
 push 890
 pop
 pop
 pop
 push 18
 push 141
 pop
 pop
 push 712
 pop
 push 991
 pop
 push 17
 push 561
 push 233
 pop
 push 490
 push 944
 push 937
 push 728
 push 724
 pop
 push 712
 push 44
 push 208
 push 489
 push 603
 push 935
 push 138
 pop
 push 815
 push 748
 push 646
 push 633
 pop
 pop
 pop
 pop
 push 493
 pop
 push 323
 pop
 push 668
 pop
 push 508
 pop
 push 373
 push 194
 pop
 push 147
 push 859
 push 91
 push 667
 push 99
 push 496
 push 397
 push 493
 push 424
 push 43
 push 280
 push 277
 pop
 push 696
 pop
 pop
 pop
 pop
 push 91
 pop
 push 277
 push 332
 pop
 pop
 push 599
 push 866
 pop
 push 598
 push 552
 push 339
 pop
 push 770
 push 540
 push 279
 pop
 push 330
 push 469
 push 738
 pop
 push 291
 push 619
 pop
 push 407
 pop
 pop
 push 653
 push 377
 push 270
 pop
 pop
 pop
 push 343
 pop
 pop
 push 531
 push 417
 pop
 push 238
 push 588
 push 753
 pop
 push 964
 pop
 pop
 pop
 pop
 pop
 pop
 push 922
 pop
 push 788
 pop
 push 556
 push 21
 pop
 push 327
 push 93
 push 912
 pop
 pop
 pop
 push 441
 push 146
 push 926
 push 355
 push 438
 push 270
 push 2
 push 590
 push 660
 pop
 push 536
 pop
 push 819
 push 709
 push 398
 push 699
 push 401
 push 257
 push 536
 push 251
 push 264
 push 233
 pop
 push 558
 pop
 push 675
 push 328
 pop
 push 961
 pop
 pop
 push 501
 push 298
 push 777
 push 64
 push 360
 push 466
 pop
 push 597
 pop
 push 364
 push 73
 pop
 push 858
 push 596
 push 567
 pop
 push 196
 pop
 push 248
 push 553
 push 599
 push 372
 push 778
 push 377
 push 372
 push 968
 pop
 push 491
 pop
 pop
 push 558
 pop
 pop
 push 240
 push 973
 pop
 push 137
 pop
 push 618
 pop
 push 173
 push 723
 push 400
 pop
 pop
 push 407
 push 55
 push 783
 push 174
 pop
 push 334
 push 161
 push 183
 push 522
 pop
 push 266
 push 943
 pop
 pop
 pop
 push 313
 push 773
 push 971
 pop
 push 294
 push 185
 push 654
 push 352
 pop
 pop
 pop
 push 198
 pop
 push 109
 push 888
 pop
 push 143
 pop
 push 191
 pop
 pop
 push 147
 push 803
 pop
 push 268
 push 322
 pop
 pop
 push 677
 pop
 pop
 pop
 pop
 pop
 push 265
 push 253
 pop
 push 303
 push 286
 push 445
 push 620
 push 335
 push 609
 push 559
 push 888
 push 498
 push 305
 push 457
 push 99
 pop
 push 555
 push 175
 push 720
 pop
 push 565
 push 747
 push 43
 pop
 push 483
 push 428
 push 284
 push 230
 push 419
 pop
 push 160
 push 912
 push 959
 pop
 push 328
 push 95
 push 223
 push 353
 push 589
 push 537
 pop
 push 575
 push 76
 push 846
 pop
 push 132
 push 129
 push 268
 push 818
 push 633
 push 598
 pop
 push 518
 pop
 push 632
 push 400
 push 685
 push 999
 pop
 pop
 push 988
 push 38
 pop
 push 867
 push 20
 push 897
 push 486
 push 988
 push 926
 push 357
 pop
 pop
 push 597
 pop
 push 885
 pop
 push 308
 push 946
 pop
 push 77
 pop
 push 38
 pop
 push 423
 push 680
 push 309
 pop
 push 583
 push 325
 pop
 push 885
 push 325
 pop
 pop
 push 968
 push 671
 push 675
 push 163
 push 264
 pop
 push 187
 pop
 push 87
 push 774
 push 82
 push 273
 push 928
 push 937
 push 522
 pop
 pop
 push 824
 push 594
 push 800
 push 227
 push 528
 pop
 push 360
 push 151
 pop
 push 340
 push 677
 push 949
 push 350
 push 699
 push 467
 push 619
 pop
 push 568
 pop
 push 68
 push 886
 push 138
 pop
 pop
 push 782
 push 98
 push 739
 push 383
 push 663
 push 177
 push 203
 push 524
 pop
 push 525
 pop
 push 499
 push 479
 pop
 push 853
 pop
 push 940
 push 86
 pop
 pop
 push 331
 pop
 pop
 push 923
 push 537
 push 727
 pop
 push 978
 push 4
 push 986
 push 507
 push 787
 push 62
 push 372
 push 166
 push 263
 push 290
 push 869
 push 244
 push 270
 push 336
 push 312
 push 603
 push 631
 pop
 push 949
 push 160
 push 662
 push 233
 push 516
 push 597
 push 693
 pop
 push 345
 push 730
 pop
 pop
 push 102
 push 240
 pop
 push 754
 push 567
 push 645
 push 648
 pop
 push 359
 push 354
 push 436
 pop
 push 461
 push 593
 pop
 push 169
 push 217
 push 701
 push 891
 pop
 push 121
 pop
 push 747
 push 808
 push 68
 push 879
 pop
 push 83
 push 57
 push 744
 push 169
 pop
 pop
 push 915
 pop
 pop
 push 918
 pop
 push 642
 push 36
 push 580
 pop
 push 635
 push 647
 pop
 pop
 push 222
 pop
 push 603
 pop
 pop
 pop
 push 208
 pop
 push 992
 push 601
 push 364
 push 53
 pop
 push 449
 push 515
 push 733
 pop
 push 77
 pop
 push 754
 push 96
 push 185
 push 589
 push 678
 push 475
 push 418
 push 743
 pop
 push 533
 push 680
 push 819
 pop
 push 672
 push 257
 push 893
 pop
 pop
 push 747
 pop
 pop
 push 367
 push 137
 push 498
 pop
 pop
 push 415
 push 557
 push 438
 push 61
 push 116
 push 776
 pop
 pop
 pop
 push 113
 push 318
 pop
 pop
 push 947
 push 750
 pop
 push 414
 push 652
 pop
 push 41
 push 382
 push 855
 pop
 pop
 push 783
 push 39
 push 448
 push 151
 push 349
 push 345
 push 568
 push 144
 pop
 push 268
 push 42
 push 762
 push 540
 push 478
 push 825
 push 393
 push 413
 push 991
 pop
 push 788
 pop
 push 800
 pop
 push 183
 push 728
 push 36
 push 584
 push 991
 push 768
 push 974
 pop
 push 284
 push 20
 pop
 pop
 pop
 pop
 pop
 push 990
 pop
 push 171
 push 83
 push 588
 pop
 push 891
 push 709
 push 127
 push 894
 push 815
 push 132
 push 888
 push 519
 push 465
 push 561
 pop
 push 638
 push 868
 push 777
 pop
 push 203
 push 588
 push 854
 pop
 push 297
 pop
 push 339
 push 706
 push 844
 pop
 push 750
 push 225
 pop
 pop
 push 350
 push 321
 push 424
 push 395
 push 378
 pop
 pop
 push 996
 pop
 pop
 pop
 push 471
 push 146
 push 663
 push 933
 push 868
 push 573
 push 381
 push 888
 push 698
 push 516
 push 607
 push 852
 push 184
 push 376
 push 255
 push 506
 pop
 push 367
 push 737
 push 735
 pop
 push 826
 push 256
 pop
 push 896
 push 67
 pop
 push 325
 pop
 push 175
 pop
 push 305
 push 945
 push 50
 push 488
 pop
 push 942
 push 775
 pop
 push 578
 push 290
 pop
 pop
 pop
 push 82
 push 213
 push 961
 push 343
 pop
 push 53
 push 495
 push 368
 push 978
 push 753
 push 243
 push 814
 push 391
 push 175
 push 228
 push 629
 push 155
 pop
 push 835
 push 488
 pop
 pop
 push 887
 push 10
 push 221
 push 3
 push 492
 push 493
 push 569
 push 215
 pop
 pop
 push 114
 push 242
 pop
 pop
 pop
 pop
 push 907
 push 278
 push 6
 pop
 push 64
 pop
 pop
 push 380
 push 302
 pop
 push 842
 push 161
 push 878
 push 244
 push 396
 push 699
 push 346
 push 693
 push 468
 push 171
 push 937
 push 795
 pop
 pop
 push 151
 push 648
 push 33
 pop
 push 791
 pop
 push 929
 pop
 push 516
 push 832
 push 352
 pop
 push 772
 push 524
 pop
 pop
 push 173
 push 627
 push 946
 pop
 push 70
 pop
 push 692
 push 312
 push 223
 pop
 pop
 push 568
 push 74
 push 103
 push 921
 pop
 push 990
 push 693
 push 767
 pop
 push 477
 push 693
 pop
 push 173
 push 482
 push 310
 push 468
 pop
 push 957
 pop
 push 818
 push 421
 push 924
 push 744
 push 989
 pop
 push 54
 push 964
 pop
 push 809
 pop
 push 711
 pop
 pop
 push 896
 push 247
 push 865
 push 767
 pop
 pop
 push 335
 push 479
 push 661
 push 260
 pop
 push 624
 push 648
 push 173
 pop
 push 849
 push 13
 pop
 pop
 pop
 push 884
 pop
 pop
 pop
 push 652
 push 661
 pop
 pop
 push 35
 push 498
 pop
 pop
 push 518
 push 26
 push 971
 push 944
 pop
 pop
 push 428
 push 138
 push 492
 push 630
 pop
 pop
 push 616
 push 912
 push 776
 pop
 pop
 pop
 push 834
 push 492
 pop
 push 154
 push 125
 push 114
 push 463
 pop
 push 367
 push 282
 push 939
 pop
 push 914
 push 341
 push 931
 push 378
 pop
 push 986
 push 800
 push 668
 push 190
 pop
 push 57
 push 931
 pop
 push 896
 push 290
 push 316
 pop
 pop
 pop
 push 470
 push 445
 push 401
 push 721
 pop
 push 706
 push 18
 push 64
 push 364
 pop
 push 251
 push 979
 push 783
 push 837
 pop
 pop
 push 602
 push 463
 pop
 push 202
 push 525
 push 733
 push 990
 pop
 push 933
 push 409
 push 338
 push 28
 push 895
 push 385
 push 990
 push 759
 pop
 push 894
 push 37
 push 638
 push 596
 push 670
 push 943
 push 299
 push 433
 pop
 pop
 push 134
 pop
 pop
 pop
 pop
 pop
 pop
 push 567
 pop
 pop
 pop
 pop
 pop
 push 419
 push 303
 pop
 push 341
 push 553
 pop
 pop
 push 878
 push 22
 push 163
 pop
 push 770
 push 672
 push 88
 push 369
 push 252
 pop
 push 545
 push 559
 push 853
 push 418
 pop
 pop
 pop
 push 781
 pop
 push 448
 pop
 push 123
 push 799
 push 926
 push 165
 push 629
 push 201
 pop
 pop
 push 550
 push 240
 pop
 push 4
 push 552
 push 48
 push 188
 push 82
 push 23
 push 348
 pop
 pop
 push 547
 pop
 push 769
 push 407
 push 562
 pop
 pop
 push 493
 push 370
 push 510
 pop
 pop
 push 416
 push 861
 push 120
 push 176
 push 767
 pop
 push 171
 pop
 push 563
 push 596
 push 85
 pop
 push 830
 push 799
 push 772
 push 565
 push 621
 pop
 push 936
 push 585
 push 554
 pop
 push 670
 pop
 push 724
 push 19
 push 470
 push 96
 push 398
 pop
 push 111
 push 839
 push 574
 push 922
 push 261
 push 991
 push 535
 pop
 push 924
 push 287
 push 183
 pop
 pop
 push 85
 pop
 push 466
 push 554
 push 863
 push 411
 pop
 pop
 pop
 push 635
 pop
 push 716
 pop
 push 525
 push 808
 push 462
 push 816
 push 703
 pop
 pop
 push 124
 pop
 push 297
 pop
 pop
 push 34
 pop
 pop
 pop
 push 750
 push 888
 push 380
 pop
 push 195
 push 274
 push 418
 push 595
 pop
 push 910
 push 503
 push 580
 push 552
 pop
 push 253
 push 22
 pop
 push 858
 push 565
 push 166
 pop
 push 843
 push 888
 push 615
 push 986
 push 932
 push 546
 push 531
 pop
 push 131
 pop
 pop
 pop
 push 341
 push 177
 push 679
 push 519
 pop
 pop
 pop
 pop
 push 923
 push 295
 push 200
 pop
 push 17
 push 582
 pop
 push 560
 push 668
 push 98
 push 663
 push 316
 pop
 push 951
 pop
 push 35
 pop
 push 780
 pop
 push 858
 push 968
 push 940
 push 563
 push 197
 push 961
 pop
 push 409
 push 239
 push 891
 push 174
 push 456
 push 837
 push 430
 pop
 pop
 pop
 push 471
 push 310
 push 502
 push 675
 pop
 pop
 push 988
 push 45
 pop
 push 625
 push 625
 pop
 push 746
 pop
 pop
 pop
 push 94
 push 712
 push 484
 push 787
 push 154
 pop
 push 820
 push 430
 push 883
 push 905
 push 77
 push 960
 push 358
 push 127
 push 118
 pop
 push 182
 push 511
 pop
 push 711
 push 423
 pop
 push 266
 push 69
 pop
 push 896
 push 838
 push 879
 push 285
 push 882
 push 96
 push 802
 push 545
 pop
 push 902
 push 392
 push 227
 push 857
 push 204
 push 593
 push 351
 pop
 pop
 push 434
 push 815
 push 217
 pop
 push 112
 push 523
 pop
 push 288
 push 50
 push 333
 push 201
 push 592
 push 959
 push 841
 push 496
 push 236
 push 400
 pop
 pop
 pop
 push 111
 pop
 pop
 push 51
 push 857
 pop
 push 34
 push 820
 push 345
 push 799
 pop
 pop
 pop
 push 489
 pop
 push 445
 pop
 push 309
 push 976
 push 931
 push 507
 push 771
 pop
 push 936
 pop
 push 37
 push 206
 pop
 push 941
 pop
 push 270
 pop
 push 973
 push 637
 pop
 push 834
 push 277
 push 653
 push 449
 push 930
 push 88
 pop
 pop
 push 113
 pop
 pop
 push 395
 pop
 pop
 pop
 push 7
 pop
 push 733
 push 871
 push 824
 push 507
 push 8
 pop
 push 954
 pop
 push 367
 push 334
 push 811
 pop
 push 228
 push 764
 push 638
 pop
 pop
 pop
 pop
 push 453
 pop
 pop
 push 604
 push 669
 push 883
 push 955
 push 861
 push 477
 push 512
 pop
 push 619
 push 188
 push 329
 push 719
 pop
 pop
 pop
 push 775
 pop
 push 877
 push 282
 pop
 push 260
 pop
 pop
 push 370
 pop
 pop
 push 751
 push 419
 pop
 push 837
 pop
 pop
 push 57
 push 458
 push 69
 push 603
 pop
 push 275
 push 683
 push 342
 pop
 pop
 pop
 push 559
 pop
 pop
 push 665
 push 477
 push 432
 pop
 push 614
 push 369
 push 46
 push 657
 push 528
 push 229
 pop
 pop
 push 238
 pop
 push 932
 push 717
 pop
 push 396
 pop
 push 304
 push 272
 pop
 push 831
 push 87
 push 802
 push 983
 push 449
 push 691
 push 901
 pop
 pop
 pop
 pop
 push 874
 push 873
 pop
 push 291
 push 452
 push 869
 push 260
 push 928
 pop
 pop
 push 75
 push 563
 pop
 push 992
 push 459
 push 844
 pop
 pop
 push 844
 push 639
 pop
 push 659
 push 885
 pop
 push 927
 push 622
 push 692
 push 569
 push 986
 pop
 push 929
 push 349
 pop
 pop
 pop
 push 475
 pop
 push 250
 pop
 push 265
 push 74
 pop
 push 359
 pop
 push 561
 pop
 pop
 push 900
 pop
 pop
 push 563
 pop
 push 511
 pop
 push 551
 push 529
 pop
 push 304
 pop
 push 379
 pop
 push 905
 push 163
 pop
 pop
 push 386
 push 911
 pop
 pop
 push 592
 push 11
 pop
 push 485
 push 809
 pop
 push 237
 push 637
 pop
 push 678
 push 791
 push 725
 push 37
 push 541
 push 686
 push 978
 push 67
 push 942
 push 347
 pop
 push 721
 pop
 push 314
 pop
 push 328
 pop
 pop
 push 49
 push 28
 push 910
 push 66
 push 681
 push 4
 push 560
 pop
 pop
 push 716
 push 603
 pop
 push 720
 push 115
 push 897
 push 118
 push 957
 push 492
 push 520
 pop
 push 710
 push 866
 pop
 pop
 push 404
 pop
 push 861
 push 802
 push 710
 push 698
 push 745
 push 100
 push 149
 push 73
 push 487
 pop
 push 898
 pop
 pop
 pop
 pop
 push 85
 push 322
 push 969
 pop
 pop
 push 695
 pop
 push 438
 push 94
 pop
 push 258
 pop
 pop
 push 516
 pop
 pop
 push 9
 pop
 push 286
 push 993
 push 327
 push 16
 push 946
 push 868
 push 899
 push 196
 pop
 pop
 push 340
 push 993
 push 647
 push 498
 pop
 pop
 push 533
 push 894
 push 648
 pop
 push 611
 push 551
 push 273
 push 716
 push 49
 push 576
 pop
 push 748
 push 126
 push 421
 push 95
 pop
 pop
 pop
 push 738
 push 720
 push 549
 pop
 push 929
 push 499
 pop
 push 463
 push 311
 push 810
 pop
 push 933
 pop
 push 947
 push 790
 push 544
 push 737
 push 966
 pop
 push 115
 push 35
 pop
 push 871
 push 146
 push 473
 pop
 pop
 push 124
 push 433
 pop
 push 746
 push 62
 push 742
 push 424
 push 198
 push 439
 push 831
 push 692
 push 455
 push 935
 push 226
 push 413
 push 277
 push 120
 push 343
 push 447
 push 434
 push 430
 push 681
 push 336
 push 130
 push 108
 push 753
 pop
 pop
 push 776
 push 715
 push 106
 pop
 push 630
 pop
 push 519
 push 238
 pop
 pop
 push 926
 pop
 pop
 push 305
 push 431
 push 99
 push 64
 push 115
 pop
 pop
 pop
 push 699
 pop
 pop
 push 902
 push 186
 push 960
 push 211
 push 971
 pop
 push 764
 push 817
 push 677
 pop
 push 315
 push 528
 push 385
 push 206
 push 708
 push 581
 pop
 push 416
 push 341
 push 221
 pop
 pop
 pop
 pop
 pop
 push 834
 push 949
 push 637
 push 823
 pop
 pop
 push 78
 pop
 push 816
 push 249
 push 837
 push 997
 push 798
 push 474
 push 320
 push 361
 push 388
 push 215
 push 675
 push 624
 push 632
 push 345
 pop
 push 86
 push 40
 pop
 push 120
 pop
 pop
 pop
 push 952
 push 696
 push 801
 push 473
 pop
 pop
 pop
 push 514
 pop
 push 607
 push 485
 pop
 push 250
 pop
 push 232
 push 225
 pop
 push 137
 pop
 push 196
 pop
 push 572
 push 277
 push 512
 push 211
 push 970
 push 906
 push 663
 push 266
 push 976
 push 324
 push 248
 push 764
 pop
 pop
 push 540
 pop
 push 885
 push 179
 pop
 push 920
 push 933
 pop
 push 447
 push 99
 push 285
 push 206
 push 663
 push 142
 pop
 push 102
 push 521
 push 654
 pop
 pop
 push 600
 pop
 push 786
 push 980
 push 107
 push 278
 pop
 push 722
 pop
 pop
 push 70
 pop
 push 932
 push 958
 push 966
 push 862
 pop
 push 672
 pop
 push 453
 pop
 push 42
 push 598
 push 64
 pop
 pop
 pop
 push 273
 push 60
 pop
 push 439
 push 172
 push 654
 push 809
 pop
 push 338
 push 451
 push 783
 push 310
 push 917
 push 274
 push 279
 pop
 push 902
 push 906
 push 562
 push 767
 push 265
 push 332
 push 328
 push 185
 pop
 push 715
 pop
 push 980
 push 31
 pop
 push 901
 pop
 push 233
 push 983
 pop
 push 239
 pop
 push 641
 push 598
 push 321
 push 72
 pop
 push 179
 push 192
 pop
 pop
 push 703
 pop
 pop
 pop
 push 496
 push 142
 push 84
 push 716
 push 647
 push 395
 push 732
 pop
 push 702
 push 225
 push 152
 pop
 pop
 push 494
 push 998
 push 152
 push 868
 push 505
 pop
 pop
 pop
 pop
 push 402
 push 625
 push 104
 pop
 pop
 push 691
 push 802
 pop
 push 505
 push 429
 pop
 push 10
 push 258
 pop
 pop
 push 132
 pop
 push 801
 pop
 pop
 pop
 pop
 push 910
 pop
 push 699
 pop
 pop
 pop
 pop
 push 751
 push 53
 push 406
 push 786
 push 95
 push 638
 pop
 push 320
 push 583
 pop
 push 935
 push 415
 push 991
 push 334
 push 889
 push 624
 push 104
 push 674
 push 190
 push 532
 push 530
 push 535
 push 110
 pop
 push 282
 pop
 push 913
 push 597
 pop
 pop
 push 988
 pop
 pop
 pop
 push 593
 pop
 push 465
 push 92
 push 215
 push 833
 push 608
 push 389
 push 759
 pop
 push 817
 push 395
 push 230
 push 852
 push 81
 pop
 push 403
 push 666
 push 587
 pop
 pop
 push 615
 pop
 push 129
 push 435
 pop
 pop
 push 486
 push 639
 push 875
 push 16
 pop
 pop
 push 394
 pop
 push 291
 pop
 pop
 pop
 push 174
 push 648
 push 746
 pop
 push 276
 push 739
 push 70
 push 172
 push 309
 pop
 pop
 push 825
 push 309
 push 566
 push 754
 pop
 push 179
 push 848
 pop
 push 736
 push 354
 push 41
 push 316
 push 100
 push 57
 push 321
 push 572
 push 518
 push 893
 push 998
 push 961
 push 702
 push 450
 push 444
 push 47
 push 399
 push 655
 push 983
 push 881
 push 141
 push 507
 push 277
 pop
 push 77
 push 527
 push 920
 pop
 push 265
 push 516
 push 972
 push 519
 push 441
 pop
 push 597
 push 310
 pop
 push 269
 push 314
 push 263
 push 898
 pop
 push 827
 push 112
 push 780
 pop
 push 887
 push 79
 pop
 push 539
 push 341
 push 386
 push 133
 push 116
 push 598
 pop
 push 183
 push 482
 push 334
 push 195
 push 679
 pop
 push 105
 push 795
 pop
 push 363
 pop
 push 320
 pop
 pop
 push 746
 push 367
 push 617
 push 879
 push 262
 push 456
 pop
 push 810
 pop
 push 178
 push 617
 push 869
 pop
 push 176
 pop
 push 487
 push 473
 push 300
 pop
 push 902
 push 624
 push 144
 pop
 push 192
 push 745
 push 858
 push 465
 push 588
 push 547
 pop
 pop
 push 991
 push 752
 push 815
 push 797
 push 235
 push 717
 push 216
 push 548
 push 695
 push 692
 push 251
 push 191
 pop
 push 273
 push 517
 push 466
 push 95
 push 370
 push 793
 push 546
 push 545
 pop
 push 773
 push 862
 push 677
 push 846
 push 216
 push 553
 push 109
 push 915
 pop
 pop
 push 878
 push 517
 push 155
 push 559
 push 110
 push 29
 push 967
 push 920
 push 855
 pop
 push 128
 pop
 pop
 pop
 push 154
 push 731
 push 412
 pop
 push 137
 push 750
 push 372
 push 875
 pop
 push 95
 pop
 pop
 push 768
 pop
 push 591
 push 433
 push 708
 push 822
 push 892
 push 612
 pop
 push 539
 pop
 push 675
 push 956
 push 72
 push 653
 push 568
 pop
 push 451
 push 379
 push 711
 push 564
 push 607
 pop
 pop
 push 289
 pop
 pop
 push 651
 push 103
 pop
 pop
 pop
 push 221
 pop
 push 657
 push 635
 push 356
 push 98
 pop
 push 381
 push 683
 push 350
 pop
 push 455
 pop
 push 931
 push 561
 pop
 pop
 push 795
 push 771
 pop
 push 145
 push 639
 push 705
 pop
 push 80
 push 352
 push 475
 pop
 push 907
 push 185
 pop
 push 714
 push 206
 push 627
 pop
 pop
 pop
 push 229
 push 646
 pop
 push 95
 push 923
 push 32
 push 211
 push 710
 push 977
 pop
 push 870
 push 612
 push 509
 push 86
 push 18
 push 525
 push 53
 push 680
 push 978
 push 930
 pop
 pop
 pop
 push 3
 pop
 push 480
 pop
 pop
 push 8
 push 978
 push 747
 pop
 push 488
 push 391
 pop
 pop
 pop
 push 101
 push 725
 push 357
 push 869
 push 904
 push 515
 push 145
 pop
 push 11
 push 175
 pop
 push 508
 push 22
 push 648
 pop
 push 677
 pop
 push 677
 push 68
 push 381
 push 410
 push 697
 push 524
 push 175
 pop
 push 546
 push 54
 push 393
 pop
 push 171
 push 586
 push 438
 push 549
 push 799
 pop
 pop
 push 453
 push 139
 push 737
 push 448
 push 534
 push 786
 pop
 pop
 push 487
 push 759
 push 298
 push 819
 push 614
 pop
 pop
 push 564
 pop
 push 580
 push 907
 push 333
 push 289
 push 903
 pop
 push 699
 pop
 push 459
 pop
 pop
 push 201
 push 320
 push 308
 push 416
 pop
 push 476
 push 399
 push 163
 push 246
 pop
 pop
 pop
 push 550
 push 225
 push 60
 push 62
 pop
 pop
 push 461
 push 389
 pop
 push 413
 push 841
 push 648
 pop
 push 991
 push 31
 push 163
 push 625
 pop
 pop
 pop
 push 333
 pop
 push 406
 push 722
 pop
 push 627
 push 525
 push 584
 pop
 push 288
 push 719
 pop
 pop
 push 466
 pop
 push 943
 pop
 push 516
 push 666
 push 410
 push 952
 push 644
 push 479
 push 274
 pop
 push 776
 push 979
 push 22
 push 591
 pop
 pop
 pop
 pop
 pop
 pop
 push 912
 push 546
 push 32
 push 161
 push 801
 pop
 push 337
 push 656
 pop
 push 809
 pop
 pop
 push 84
 push 19
 push 329
 push 254
 push 735
 pop
 pop
 push 783
 push 34
 push 629
 push 764
 push 96
 pop
 pop
 push 92
 push 50
 push 117
 push 94
 push 327
 push 659
 push 397
 push 719
 push 451
 pop
 push 497
 pop
 pop
 push 510
 pop
 push 874
 pop
 pop
 push 257
 push 386
 push 299
 push 778
 pop
 pop
 pop
 push 574
 push 428
 pop
 push 426
 push 128
 push 99
 push 853
 push 868
 push 43
 push 100
 pop
 push 321
 push 386
 push 752
 push 32
 push 149
 push 711
 pop
 push 677
 pop
 pop
 push 899
 pop
 push 248
 push 497
 push 632
 push 38
 push 192
 push 455
 push 173
 push 669
 push 463
 push 901
 pop
 pop
 pop
 push 129
 push 613
 pop
 pop
 push 61
 push 434
 pop
 push 93
 push 390
 push 751
 push 911
 pop
 pop
 push 369
 push 14
 pop
 pop
 push 419
 push 276
 pop
 push 599
 pop
 push 776
 pop
 push 635
 pop
 push 448
 push 402
 push 821
 push 558
 push 878
 push 461
 push 868
 push 347
 push 988
 push 764
 push 456
 push 487
 push 171
 pop
 pop
 push 135
 pop
 push 285
 push 752
 pop
 pop
 push 431
 push 865
 push 319
 push 779
 pop
 push 934
 push 687
 push 691
 pop
 push 816
 push 752
 push 147
 push 455
 push 525
 push 159
 push 150
 pop
 pop
 pop
 push 986
 push 323
 push 189
 push 305
 pop
 push 1
 push 820
 pop
 push 528
 push 567
 push 755
 pop
 push 511
 push 597
 push 57
 push 476
 push 928
 push 295
 push 240
 pop
 pop
 push 733
 push 920
 pop
 push 4
 push 332
 push 455
 push 94
 pop
 pop
 push 156
 pop
 push 86
 push 26
 push 346
 pop
 push 273
 push 651
 push 534
 push 763
 push 860
 pop
 push 273
 push 623
 push 42
 pop
 push 835
 pop
 push 569
 push 274
 pop
 push 961
 push 305
 push 710
 push 184
 pop
 pop
 push 635
 pop
 pop
 pop
 push 695
 push 362
 push 915
 push 310
 pop
 push 863
 push 944
 push 405
 pop
 push 915
 push 709
 push 259
 push 352
 push 314
 push 613
 pop
 push 838
 push 776
 push 284
 push 877
 pop
 push 800
 pop
 pop
 pop
 push 529
 push 969
 pop
 pop
 push 720
 pop
 pop
 pop
 pop
 pop
 push 987
 push 54
 push 662
 push 895
 push 825
 pop
 push 767
 pop
 pop
 push 627
 push 798
 pop
 push 470
 push 842
 push 26
 pop
 pop
 push 272
 push 565
 push 10
 push 247
 pop
 push 963
 push 962
 pop
 push 163
 pop
 push 213
 push 791
 pop
 push 853
 push 937
 push 191
 push 60
 push 729
 pop
 pop
 pop
 push 650
 pop
 push 756
 push 202
 push 232
 push 422
 pop
 push 845
 pop
 pop
 push 664
 push 230
 pop
 push 257
 push 815
 push 633
 push 777
 push 993
 push 695
 pop
 push 546
 pop
 pop
 push 51
 push 207
 push 584
 pop
 push 55
 push 685
 push 539
 push 409
 push 37
 pop
 push 274
 pop
 pop
 push 544
 pop
 push 820
 push 460
 pop
 push 366
 push 696
 push 706
 push 908
 pop
 push 515
 pop
 pop
 push 364
 push 391
 pop
 push 27
 push 848
 pop
 pop
 push 148
 push 418
 push 570
 pop
 pop
 push 345
 push 436
 pop
 push 444
 push 303
 push 957
 push 649
 push 38
 push 548
 push 0
 push 53
 push 197
 push 277
 pop
 push 952
 push 264
 pop
 pop
 pop
 push 985
 pop
 pop
 push 800
 push 871
 push 941
 push 802
 pop
 pop
 pop
 push 851
 push 269
 push 283
 push 344
 push 141
 pop
 pop
 push 786
 pop
 push 291
 push 911
 pop
 pop
 push 697
 pop
 push 198
 push 765
 push 475
 push 44
 push 260
 pop
 pop
 pop
 pop
 pop
 push 156
 push 524
 pop
 push 149
 pop
 pop
 push 713
 push 981
 push 43
 pop
 push 256
 pop
 pop
 push 128
 pop
 push 925
 push 611
 push 100
 push 505
 push 362
 pop
 pop
 pop
 push 374
 push 711
 pop
 push 9
 push 242
 push 224
 push 919
 pop
 pop
 pop
 push 403
 push 579
 push 70
 push 449
 push 841
 pop
 pop
 pop
 pop
 push 650
 push 146
 push 667
 push 611
 push 235
 pop
 push 872
 pop
 pop
 push 143
 pop
 push 783
 pop
 push 697
 push 989
 push 539
 push 598
 pop
 push 126
 push 869
 push 468
 push 743
 push 209
 push 77
 push 745
 push 670
 pop
 pop
 push 961
 push 209
 push 548
 push 61
 pop
 push 61
 pop
 pop
 pop
 push 470
 push 638
 pop
 pop
 push 371
 push 780
 pop
 push 723
 push 687
 push 803
 push 472
 push 458
 push 955
 push 207
 push 292
 push 938
 push 956
 pop
 pop
 push 898
 push 472
 push 194
 push 173
 pop
 push 259
 push 766
 push 682
 pop
 push 794
 push 913
 push 74
 push 116
 push 563
 pop
 pop
 pop
 push 253
 push 669
 push 841
 pop
 push 469
 push 91
 push 401
 push 563
 pop
 push 48
 pop
 push 332
 push 998
 pop
 pop
 pop
 push 97
 pop
 push 935
 push 338
 push 539
 pop
 push 144
 push 644
 push 3
 pop
 push 662
 pop
 push 704
 push 257
 pop
 push 564
 push 974
 push 101
 push 614
 pop
 pop
 pop
 push 535
 push 101
 push 525
 push 645
 push 532
 push 542
 push 877
 push 870
 push 691
 pop
 pop
 push 366
 push 814
 push 773
 push 759
 push 783
 pop
 push 631
 pop
 push 467
 push 128
 pop
 pop
 push 49
 push 832
 pop
 push 711
 push 273
 push 545
 pop
 push 860
 pop
 pop
 push 526
 pop
 push 279
 pop
 push 355
 pop
 push 585
 push 744
 pop
 pop
 push 928
 push 485
 push 951
 push 155
 push 130
 push 528
 push 989
 pop
 push 306
 push 125
 push 342
 push 17
 pop
 push 550
 push 945
 pop
 push 468
 push 573
 push 204
 push 729
 pop
 push 376
 pop
 pop
 pop
 push 741
 pop
 pop
 push 52
 push 759
 pop
 push 930
 push 272
 push 431
 push 708
 pop
 push 371
 pop
 pop
 push 438
 push 953
 pop
 push 585
 pop
 push 145
 push 569
 pop
 pop
 push 881
 push 487
 push 367
 push 122
 push 13
 push 757
 pop
 pop
 push 210
 pop
 push 654
 push 761
 push 690
 pop
 push 98
 push 952
 push 207
 push 951
 pop
 push 234
 push 523
 pop
 push 282
 pop
 push 245
 pop
 pop
 pop
 push 161
 push 936
 push 272
 push 305
 push 628
 push 648
 pop
 push 555
 pop
 push 368
 push 758
 push 13
 pop
 push 576
 push 711
 push 43
 pop
 push 443
 push 369
 pop
 push 487
 push 571
 push 36
 push 166
 push 799
 push 263
 pop
 pop
 pop
 push 439
 push 491
 push 573
 pop
 push 75
 push 760
 push 834
 push 307
 push 692
 push 682
 pop
 pop
 push 603
 pop
 pop
 pop
 pop
 push 724
 push 915
 push 862
 pop
 pop
 push 124
 pop
 pop
 push 247
 pop
 push 800
 pop
 push 194
 pop
 push 915
 pop
 pop
 push 452
 push 511
 pop
 push 755
 push 999
 push 861
 push 476
 push 950
 push 892
 push 483
 pop
 pop
 pop
 push 294
 push 323
 pop
 push 711
 pop
 push 735
 push 966
 pop
 push 880
 pop
 pop
 push 914
 push 994
 pop
 pop
 push 31
 push 919
 push 721
 push 500
 push 178
 pop
 pop
 push 128
 push 803
 push 724
 pop
 push 904
 pop
 push 770
 push 86
 push 355
 push 621
 pop
 push 392
 pop
 push 920
 push 80
 push 212
 push 439
 pop
 push 737
 pop
 push 753
 push 382
 push 307
 push 109
 pop
 push 577
 push 219
 push 669
 push 549
 push 318
 push 152
 push 28
 pop
 pop
 pop
 pop
 push 96
 pop
 push 971
 pop
 push 417
 push 386
 push 314
 push 297
 push 694
 push 108
 push 96
 pop
 push 374
 push 892
 push 94
 push 768
 push 668
 push 353
 push 478
 pop
 pop
 push 977
 pop
 push 699
 push 73
 pop
 pop
 pop
 pop
 pop
 pop
 push 732
 push 172
 push 658
 pop
 push 536
 push 368
 push 72
 push 948
 push 758
 push 206
 push 39
 push 757
 push 777
 pop
 push 297
 push 639
 push 581
 push 629
 push 351
 pop
 pop
 push 63
 pop
 push 483
 pop
 push 622
 push 555
 pop
 pop
 pop
 push 496
 pop
 push 38
 push 175
 push 844
 push 276
 push 750
 push 862
 push 527
 pop
 push 212
 push 346
 push 35
 pop
 pop
 push 550
 push 571
 push 240
 pop
 push 152
 pop
 push 441
 push 330
 push 511
 pop
 push 72
 push 258
 push 329
 push 746
 pop
 push 281
 push 924
 pop
 pop
 pop
 pop
 pop
 push 703
 pop
 push 716
 pop
 pop
 pop
 pop
 push 53
 pop
 pop
 push 468
 pop
 push 920
 pop
 push 637
 pop
 pop
 push 639
 push 273
 push 303
 push 250
 pop
 pop
 push 586
 push 3
 pop
 push 527
 push 392
 push 122
 pop
 push 165
 pop
 push 64
 pop
 push 284
 pop
 push 6
 push 771
 push 22
 pop
 push 218
 push 388
 push 850
 push 65
 push 219
 push 44
 pop
 push 233
 pop
 push 602
 push 644
 pop
 push 920
 push 525
 pop
 push 715
 push 203
 push 360
 pop
 push 447
 push 567
 push 820
 push 977
 push 883
 push 715
 pop
 push 490
 push 560
 pop
 push 744
 push 530
 push 11
 push 922
 push 388
 push 399
 pop
 push 179
 push 724
 push 158
 push 97
 push 125
 pop
 push 655
 push 347
 push 74
 push 710
 pop
 push 620
 push 902
 push 65
 push 327
 push 539
 pop
 push 34
 pop
 pop
 pop
 pop
 push 908
 pop
 push 346
 pop
 push 380
 pop
 push 401
 pop
 push 106
 push 180
 pop
 push 265
 pop
 pop
 push 39
 pop
 push 784
 push 196
 push 797
 pop
 push 751
 pop
 push 321
 push 255
 pop
 pop
 push 372
 push 143
 push 983
 pop
 push 31
 push 396
 push 551
 push 75
 push 312
 push 916
 pop
 push 589
 push 655
 pop
 push 13
 pop
 pop
 pop
 pop
 push 260
 push 383
 push 589
 pop
 pop
 push 292
 pop
 pop
 push 177
 pop
 pop
 pop
 pop
 pop
 pop
 push 911
 push 807
 push 902
 push 677
 pop
 pop
 pop
 push 937
 push 437
 push 287
 pop
 push 418
 pop
 push 897
 push 169
 pop
 pop
 push 421
 push 434
 pop
 push 254
 pop
 push 963
 push 728
 push 499
 push 952
 push 332
 push 709
 push 20
 pop
 pop
 push 355
 pop
 pop
 push 589
 push 443
 push 435
 push 809
 push 968
 pop
 push 392
 pop
 push 537
 push 495
 push 126
 pop
 push 932
 push 275
 pop
 pop
 push 761
 pop
 push 194
 push 229
 push 638
 push 279
 push 354
 pop
 push 904
 pop
 push 800
 pop
 push 381
 push 230
 push 516
 push 855
 pop
 push 258
 pop
 push 813
 push 684
 push 903
 pop
 push 629
 push 151
 push 571
 push 218
 push 334
 pop
 push 383
 pop
 push 453
 pop
 pop
 push 919
 push 507
 push 776
 pop
 pop
 push 106
 push 945
 push 179
 push 437
 push 73
 pop
 push 877
 push 732
 push 441
 push 509
 pop
 push 212
 push 21
 push 807
 pop
 pop
 pop
 push 660
 push 316
 push 727
 push 79
 push 550
 pop
 push 732
 pop
 push 305
 pop
 pop
 push 713
 push 203
 pop
 push 70
 push 764
 push 610
 pop
 pop
 push 949
 pop
 push 906
 pop
 push 87
 pop
 push 925
 push 603
 push 911
 pop
 push 358
 push 541
 push 905
 push 137
 push 505
 push 5
 push 397
 pop
 push 134
 push 110
 push 818
 push 829
 push 735
 push 33
 pop
 pop
 push 458
 push 305
 pop
 push 125
 push 302
 push 907
 push 184
 pop
 push 406
 push 197
 push 634
 push 180
 pop
 pop
 pop
 push 782
 push 772
 pop
 push 889
 push 937
 push 267
 pop
 pop
 push 571
 push 798
 push 656
 push 179
 push 569
 pop
 push 976
 push 991
 pop
 pop
 push 952
 push 764
 pop
 push 815
 pop
 push 24
 pop
 push 989
 push 580
 push 266
 pop
 pop
 push 194
 pop
 push 704
 push 247
 push 545
 push 241
 push 77
 push 588
 push 23
 pop
 pop
 push 916
 push 249
 pop
 push 687
 pop
 push 567
 push 833
 push 472
 push 867
 push 187
 push 146
 push 332
 push 951
 push 715
 push 675
 pop
 push 305
 push 493
 push 551
 pop
 push 949
 push 72
 push 455
 push 451
 push 64
 pop
 push 278
 push 752
 pop
 push 742
 push 225
 push 346
 push 470
 push 833
 pop
 push 886
 push 21
 push 758
 push 1
 push 877
 push 416
 push 744
 pop
 push 828
 push 712
 push 852
 push 536
 pop
 push 120
 push 370
 pop
 push 545
 push 755
 pop
 push 603
 push 806
 pop
 push 128
 pop
 pop
 push 58
 pop
 push 290
 pop
 push 851
 push 778
 push 204
 push 291
 push 460
 push 748
 push 222
 push 484
 push 102
 push 362
 push 254
 push 316
 push 244
 pop
 pop
 push 789
 push 319
 push 413
 push 251
 push 237
 push 407
 push 404
 push 317
 push 593
 push 890
 push 248
 pop
 push 286
 push 322
 push 711
 push 768
 push 440
 push 557
 push 961
 pop
 push 947
 pop
 pop
 push 801
 push 188
 pop
 push 297
 pop
 push 694
 pop
 pop
 push 281
 push 7
 pop
 push 551
 pop
 push 102
 pop
 pop
 push 112
 pop
 push 674
 push 233
 push 823
 push 799
 push 867
 push 47
 pop
 pop
 push 553
 push 677
 push 786
 pop
 pop
 push 714
 pop
 push 19
 push 435
 push 191
 pop
 push 77
 push 892
 push 6
 push 126
 push 808
 push 665
 push 22
 push 891
 push 76
 push 613
 push 135
 push 39
 push 364
 push 255
 push 12
 push 186
 push 563
 pop
 push 606
 push 889
 push 543
 push 520
 pop
 push 446
 push 329
 pop
 push 564
 push 194
 push 328
 push 548
 push 189
 push 168
 push 956
 push 836
 push 663
 push 617
 push 611
 push 335
 push 423
 push 659
 pop
 push 237
 push 584
 push 752
 push 870
 push 720
 push 999
 push 321
 pop
 push 717
 pop
 pop
 pop
 push 87
 push 949
 push 320
 push 798
 push 425
 push 480
 push 548
 push 496
 push 274
 pop
 push 595
 push 44
 pop
 push 901
 pop
 push 384
 push 758
 push 294
 push 973
 push 668
 push 544
 pop
 push 317
 push 425
 push 690
 push 884
 push 109
 push 390
 push 459
 pop
 push 680
 pop
 push 379
 push 569
 pop
 pop
 push 341
 push 244
 push 212
 push 338
 pop
 push 595
 pop
 pop
 push 374
 push 532
 pop
 push 615
 push 492
 pop
 push 549
 push 268
 push 602
 push 688
 push 731
 pop
 push 893
 push 760
 push 398
 pop
 pop
 push 887
 push 144
 pop
 push 201
 push 37
 push 321
 push 97
 pop
 pop
 pop
 push 985
 push 145
 pop
 push 308
 pop
 push 219
 pop
 push 440
 pop
 pop
 push 611
 push 162
 push 864
 push 831
 push 175
 push 526
 push 256
 push 681
 pop
 pop
 pop
 pop
 push 307
 push 645
 push 734
 push 549
 push 760
 push 136
 push 23
 pop
 push 697
 push 154
 push 77
 push 595
 pop
 push 794
 push 755
 push 179
 push 274
 push 561
 push 1
 push 333
 pop
 push 536
 push 630
 push 665
 push 168
 push 894
 push 42
 push 763
 push 941
 push 567
 push 141
 pop
 pop
 push 804
 push 750
 push 103
 push 17
 push 316
 push 411
 push 981
 push 519
 push 137
 pop
 push 211
 pop
 push 986
 push 621
 push 185
 push 673
 push 813
 pop
 push 820
 push 30
 push 824
 push 945
 push 138
 push 608
 push 110
 pop
 pop
 pop
 push 191
 push 809
 pop
 push 998
 push 380
 push 832
 push 746
 push 647
 pop
 pop
 push 160
 push 628
 pop
 push 167
 pop
 pop
 push 387
 push 985
 pop
 pop
 push 280
 push 581
 push 191
 push 314
 pop
 pop
 push 376
 push 168
 push 487
 pop
 push 234
 push 695
 pop
 push 568
 pop
 push 823
 pop
 pop
 push 1
 push 347
 push 331
 push 758
 pop
 pop
 push 845
 pop
 push 773
 push 688
 push 363
 push 976
 push 531
 push 350
 push 772
 push 407
 push 422
 push 595
 pop
 push 282
 push 811
 push 521
 push 701
 pop
 pop
 pop
 push 216
 push 744
 pop
 push 501
 push 478
 push 610
 pop
 push 538
 pop
 pop
 push 572
 push 913
 push 427
 pop
 push 342
 push 90
 pop
 pop
 push 172
 pop
 push 169
 push 804
 pop
 push 811
 pop
 push 523
 push 140
 pop
 push 270
 pop
 push 453
 pop
 push 288
 push 116
 pop
 pop
 push 673
 push 5
 push 416
 push 223
 push 986
 pop
 pop
 push 768
 push 539
 pop
 pop
 push 543
 push 988
 push 939
 pop
 push 393
 push 861
 pop
 push 54
 push 684
 push 824
 push 191
 push 203
 push 926
 push 74
 push 678
 push 570
 push 672
 pop
 push 219
 pop
 push 563
 pop
 push 930
 pop
 push 188
 pop
 push 752
 pop
 push 837
 pop
 push 70
 push 328
 push 814
 push 457
 push 622
 push 133
 push 628
 push 590
 push 223
 pop
 push 486
 push 127
 push 692
 pop
 pop
 push 293
 pop
 pop
 push 798
 pop
 push 338
 pop
 push 146
 pop
 push 725
 pop
 push 270
 pop
 pop
 push 417
 push 500
 push 949
 push 255
 push 32
 pop
 pop
 push 732
 push 857
 pop
 pop
 push 593
 push 57
 push 304
 push 124
 pop
 push 955
 pop
 push 433
 push 712
 push 433
 pop
 pop
 push 828
 pop
 push 281
 pop
 push 510
 push 214
 push 743
 pop
 push 843
 pop
 push 18
 push 480
 push 803
 push 775
 push 274
 push 203
 push 264
 push 888
 push 186
 push 50
 push 601
 push 544
 push 783
 pop
 push 369
 push 874
 push 635
 push 410
 push 67
 pop
 push 611
 push 135
 push 146
 push 276
 push 631
 push 190
 push 943
 push 169
 push 686
 push 659
 pop
 push 983
 pop
 push 691
 pop
 push 640
 push 214
 push 188
 push 225
 push 497
 push 178
 push 990
 pop
 pop
 push 729
 push 670
 push 360
 push 914
 push 237
 push 984
 pop
 push 260
 push 198
 pop
 pop
 push 257
 push 181
 push 505
 push 786
 push 188
 pop
 push 197
 push 665
 pop
 push 798
 pop
 push 640
 push 788
 pop
 push 329
 push 152
 push 743
 push 961
 pop
 push 841
 push 23
 pop
 push 139
 push 806
 push 770
 push 955
 push 40
 pop
 push 126
 push 228
 push 62
 push 368
 push 631
 push 790
 pop
 push 367
 pop
 push 392
 pop
 push 273
 pop
 push 933
 push 467
 push 317
 push 704
 push 659
 push 412
 push 42
 push 858
 push 907
 push 833
 pop
 pop
 push 166
 push 146
 push 148
 push 533
 push 710
 push 941
 push 37
 push 584
 push 268
 pop
 pop
 pop
 push 261
 pop
 pop
 push 516
 push 466
 push 508
 pop
 push 466
 pop
 push 568
 push 342
 push 698
 push 230
 pop
 push 589
 push 843
 push 922
 push 875
 push 186
 pop
 push 885
 push 692
 push 543
 pop
 pop
 push 6
 push 199
 push 547
 push 471
 push 273
 pop
 push 750
 pop
 pop
 push 635
 push 292
 pop
 push 801
 push 924
 push 264
 push 22
 push 205
 push 618
 push 804
 push 906
 push 487
 pop
 push 226
 push 611
 push 360
 push 827
 push 167
 push 269
 push 65
 push 317
 pop
 pop
 pop
 pop
 push 830
 push 759
 pop
 push 312
 push 350
 push 401
 push 610
 push 655
 push 696
 push 130
 pop
 push 375
 pop
 push 927
 push 870
 push 646
 push 450
 push 714
 push 23
 push 360
 push 966
 push 875
 pop
 pop
 push 171
 pop
 pop
 push 326
 pop
 push 258
 push 914
 push 218
 push 626
 push 349
 push 676
 push 43
 push 518
 push 133
 pop
 push 837
 push 286
 push 513
 push 555
 push 63
 push 774
 push 175
 pop
 push 304
 pop
 push 749
 push 259
 push 430
 pop
 push 175
 pop
 push 171
 push 728
 push 552
 push 869
 pop
 push 332
 push 335
 pop
 push 240
 push 963
 push 24
 push 363
 push 809
 push 385
 push 595
 push 589
 push 90
 pop
 push 519
 push 872
 push 715
 push 465
 push 991
 pop
 push 104
 push 16
 push 137
 push 935
 push 891
 push 776
 pop
 push 172
 push 199
 pop
 push 159
 push 545
 push 659
 push 712
 push 611
 push 832
 pop
 push 686
 pop
 pop
 push 753
 push 346
 push 128
 push 853
 pop
 push 467
 push 360
 push 755
 push 853
 push 822
 push 729
 push 157
 pop
 pop
 pop
 pop
 push 129
 push 572
 push 439
 push 302
 pop
 push 151
 push 696
 pop
 pop
 push 743
 push 775
 pop
 pop
 pop
 push 441
 pop
 push 264
 push 907
 pop
 push 231
 pop
 push 853
 push 138
 push 600
 push 82
 pop
 push 140
 push 646
 push 910
 pop
 pop
 push 177
 push 19
 push 340
 pop
 push 694
 pop
 push 225
 push 874
 push 26
 push 1
 push 666
 push 722
 push 897
 pop
 push 308
 pop
 push 935
 push 235
 push 660
 push 879
 push 73
 pop
 pop
 pop
 push 785
 pop
 push 62
 push 760
 push 6
 pop
 pop
 pop
 push 551
 push 931
 pop
 push 585
 push 237
 push 4
 push 99
 push 943
 push 594
 push 359
 push 898
 push 304
 pop
 pop
 pop
 push 467
 pop
 pop
 pop
 pop
 push 324
 push 401
 push 494
 pop
 pop
 push 572
 pop
 push 681
 pop
 push 132
 pop
 pop
 push 452
 pop
 push 402
 push 923
 pop
 push 133
 push 708
 pop
 push 191
 pop
 push 551
 pop
 push 914
 push 194
 pop
 push 303
 push 497
 push 496
 push 203
 pop
 pop
 push 60
 push 591
 pop
 pop
 push 944
 push 826
 push 188
 push 886
 pop
 pop
 push 489
 push 81
 pop
 pop
 push 155
 pop
 push 364
 push 994
 push 301
 pop
 push 985
 push 895
 push 424
 pop
 push 324
 pop
 push 658
 push 343
 push 607
 push 302
 pop
 push 805
 push 705
 push 698
 push 695
 push 397
 pop
 push 75
 push 727
 push 671
 push 674
 push 671
 push 907
 push 374
 push 989
 push 449
 push 996
 push 611
 push 698
 push 609
 push 814
 push 457
 push 664
 push 437
 pop
 push 24
 push 707
 pop
 pop
 pop
 pop
 push 15
 push 475
 push 661
 pop
 pop
 push 764
 push 683
 pop
 push 884
 push 761
 pop
 push 703
 push 933
 push 853
 push 649
 push 797
 push 413
 pop
 pop
 pop
 pop
 pop
 push 794
 push 62
 push 556
 push 890
 push 660
 pop
 push 591
 pop
 push 356
 push 117
 push 788
 push 58
 pop
 push 607
 push 747
 push 577
 pop
 pop
 push 615
 pop
 push 32
 pop
 push 265
 push 309
 pop
 push 21
 pop
 pop
 push 660
 pop
 push 163
 push 350
 push 976
 push 201
 push 987
 push 216
 pop
 push 496
 push 622
 push 601
 push 910
 pop
 push 715
 push 193
 push 899
 push 108
 push 111
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop
 pop`;
 // handle(str);
