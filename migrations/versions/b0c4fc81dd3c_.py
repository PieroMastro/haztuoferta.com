"""empty message

Revision ID: b0c4fc81dd3c
Revises: a31abbbcd33d
Create Date: 2022-11-18 14:53:32.751182

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'b0c4fc81dd3c'
down_revision = 'a31abbbcd33d'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('user', schema=None) as batch_op:
        batch_op.add_column(sa.Column('name', sa.String(length=250), nullable=False))
        batch_op.drop_column('full_name')

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('user', schema=None) as batch_op:
        batch_op.add_column(sa.Column('full_name', sa.VARCHAR(length=250), autoincrement=False, nullable=False))
        batch_op.drop_column('name')

    # ### end Alembic commands ###