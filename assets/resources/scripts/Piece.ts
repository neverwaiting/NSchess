enum PieceType {
    PIECE_TYPE_KING = 0,
    PIECE_TYPE_ADVISOR = 1,
    PIECE_TYPE_BISHOP = 2,
    PIECE_TYPE_KNIGHT = 3,
    PIECE_TYPE_ROOK = 4,
    PIECE_TYPE_CANNON = 5,
    PIECE_TYPE_PAWN = 6,
    PIECE_TYPE_NUM = 7,
    PIECE_TYPE_NONE = 8
}

export class Piece {
    type_: PieceType
    pos_: number
    show_: boolean
    name_: string
}