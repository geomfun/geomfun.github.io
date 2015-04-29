var A  = board.create('point', [0,0]),
    B  = board.create('point', [2,0]),
    C  = board.create('point', [1,2]),

    a1 = board.create('segment', [A,B]),
    a2 = board.create('segment', [B,C]),
    a3 = board.create('segment', [C,A]);

c1 = board.create('circle', [A,
    function(){ return (C.Dist(A)-B.Dist(C)+A.Dist(B))/2.0; }
    ]),
c2 = board.create('circle', [B,
    function(){ return A.Dist(B)-c1.Radius(); }
    ]),
c3 = board.create('circle', [C,
    function(){ return B.Dist(C)-c2.Radius(); }
    ]);